import { RequestHandler, Request, Response, NextFunction } from 'express';

/**
 * Catches async endpoint errors with promises
 */
export const catchAsync = <Req extends Request = Request, Res extends Response = Response>(
  fn: (req: Req, res: Res, next: NextFunction) => void
): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req as Req, res as Res, next)).catch(next);
  };
};
