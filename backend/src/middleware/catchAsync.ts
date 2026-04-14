import { RequestHandler, Request, Response, NextFunction } from 'express';

/**
 * Catches async endpoint errors
 * P - Params
 * ResB - Response Body
 * ReqB - Request Body
 * ReqQ - Request Query
 */
export const catchAsync = <P, ResB, ReqB, ReqQ>(
  fn: RequestHandler<P, ResB, ReqB, ReqQ>
): RequestHandler<P, ResB, ReqB, ReqQ> => {
  return (req: Request<P, ResB, ReqB, ReqQ>, res: Response<ResB>, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
