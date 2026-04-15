import { Request, Response, NextFunction } from 'express';
import { User } from '@gamifikace/shared';
import z from 'zod';

export const AUTH_COOKIE_NAME = 'token';

export const AuthCookiesSchema = z.object({
  [AUTH_COOKIE_NAME]: z.string().optional(),
});

export interface AuthenticatedRequest<P, ResB, ReqB, ReqQ> extends Request<P, ResB, ReqB, ReqQ> {
  user: User;
}

export type AuthenticatedRequestHandler<P, ResB, ReqB, ReqQ> = (
  req: AuthenticatedRequest<P, ResB, ReqB, ReqQ>,
  res: Response<ResB>,
  next: NextFunction
) => void | Promise<void>;
