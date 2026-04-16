import { RequestHandler, Router, Request, Response, NextFunction } from 'express';
import { authenticateJWT } from '../middleware/auth';
import { BaseRequestSchemaType, Endpoint, SuccessRespoonseSchemaType } from '@gamifikace/shared';
import { ZodType } from 'zod';
import { TypedRequestHandler } from './typedRequestHandler';

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
    try {
      const data = await route.fn(
        req as Parameters<TypedRequestHandler<E>>[0],
        res as Parameters<TypedRequestHandler<E>>[1],
        next as Parameters<TypedRequestHandler<E>>[2]
      ); // stfu typescript

      if (!res.headersSent) {
        res.status(200).json({
          success: true,
          data: data,
        });
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
