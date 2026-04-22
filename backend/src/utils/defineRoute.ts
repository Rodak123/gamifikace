import { RequestHandler, Router, NextFunction } from 'express';
import { AuthenticatedRequest, authenticateJWT } from '../middleware/auth';
import {
  BaseRequestSchemaType,
  Endpoint,
  hasAccess,
  SuccessRespoonseSchemaType,
} from '@gamifikace/shared';
import { ZodType } from 'zod';
import { TypedRequestHandler } from './typedRequestHandler';
import { EndpointError } from '../middleware/endpointError';

export interface Route<
  E extends Endpoint<BaseRequestSchemaType, SuccessRespoonseSchemaType, boolean>,
> {
  definition: E;
  fn: TypedRequestHandler<E>;
}

const validateWith = (schema: ZodType): RequestHandler => {
  return async (req, _res, next) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      next(error);
    }
  };
};

const catchAsync = <TReq, TRes>(
  fn: (req: TReq, res: TRes, next: NextFunction) => Promise<void> | void
): RequestHandler<TReq, TRes> => {
  return (req, res, next) => {
    Promise.resolve(fn(req as unknown as TReq, res as unknown as TRes, next)).catch(next);
  };
};

export const defineRoute = <
  E extends Endpoint<BaseRequestSchemaType, SuccessRespoonseSchemaType, boolean>,
>(
  router: Router,
  route: Route<E>
) => {
  const routeFunction: RequestHandler = async (req, res, next) => {
    const typedReq = req as Parameters<TypedRequestHandler<E>>[0];

    if (route.definition.auth.isAuthenticated) {
      const minRole = route.definition.auth.minRole;

      const authenticatedReq = typedReq as AuthenticatedRequest<unknown, unknown, unknown, unknown>;
      const role = authenticatedReq.user.role;

      if (!hasAccess(role, minRole)) {
        next(new EndpointError(403, 'Clearance was not met.'));
      }
    }

    try {
      const data = await route.fn(
        typedReq,
        res as Parameters<TypedRequestHandler<E>>[1],
        next as Parameters<TypedRequestHandler<E>>[2]
      ); // stfu typescript

      if (!res.headersSent) {
        const responseJson = {
          success: true,
          data: data,
        };
        const parsed = route.definition.responseSchema.parse(responseJson);
        res.status(200).json(parsed);
      }
    } catch (error) {
      next(error);
    }
  };

  const routeHandlers = [
    validateWith(route.definition.requestSchema),
    route.definition.auth.isAuthenticated ? catchAsync(authenticateJWT) : null,
    catchAsync(routeFunction),
  ].filter((handler): handler is RequestHandler => handler !== null);

  switch (route.definition.method) {
    case 'get':
      router.get(route.definition.path, ...routeHandlers);
      break;
    case 'post':
      router.post(route.definition.path, ...routeHandlers);
      break;
  }
};
