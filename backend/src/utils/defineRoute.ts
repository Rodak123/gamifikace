import { RequestHandler, Router } from 'express';
import { authenticateJWT } from '../middleware/auth';
import { ZodObject } from 'zod';
import { validateWith } from './validateWith';
import { catchAsync } from './catchAsync';
import { ParamsDictionary, Query } from 'express-serve-static-core';
import { AuthenticatedRequestHandler } from '../middleware/authRequest';

interface RouteBase {
  path: string;
  method: 'get' | 'post';
  requestSchema: ZodObject;
}

interface BasicRoute<P, ResB, ReqB, ReqQ> extends RouteBase {
  isAuthenticated: false;
  fn: RequestHandler<P, ResB, ReqB, ReqQ>;
}

interface AuthenticatedRoute<P, ResB, ReqB, ReqQ> extends RouteBase {
  isAuthenticated: true;
  fn: AuthenticatedRequestHandler<P, ResB, ReqB, ReqQ>;
}

export type Route<P, ResB, ReqB, ReqQ> =
  | BasicRoute<P, ResB, ReqB, ReqQ>
  | AuthenticatedRoute<P, ResB, ReqB, ReqQ>;

/**
 * Defines a route
 * - path - endpoint path
 * - method - allowed method
 * - isAuthenticated - whether to validate auth token
 * - requestSchema - zod schema which validates request data
 * - fn - the endpoint function
 */
export const defineRoute = <P extends ParamsDictionary, ResB, ReqB, ReqQ extends Query>(
  router: Router,
  route: Route<P, ResB, ReqB, ReqQ>
) => {
  const routeHandlers = [
    validateWith(route.requestSchema), // validate zod schema
    route.isAuthenticated && catchAsync(authenticateJWT), // authenticate
    catchAsync(route.fn), // process endpoint
  ].filter((handler) => !!handler);

  switch (route.method) {
    case 'get':
      router.get(route.path, ...routeHandlers);
      break;
    case 'post':
      router.post(route.path, ...routeHandlers);
      break;
  }
};
