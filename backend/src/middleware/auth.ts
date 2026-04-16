import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/UserService';
import { JWTService } from '../services/JWTService';
import { prisma } from '../config/db';
import { EndpointError } from './endpointError';
import { AuthCookiesSchema } from './authRequest';
import { User } from '@gamifikace/shared';

const userService = new UserService(prisma);
const jwtService = new JWTService();

export type AuthenticatedRequest<P, ResB, ReqB, ReqQ> = Request<P, ResB, ReqB, ReqQ> & {
  user: User;
};

export const authenticateJWT = async <P, ResB, ReqB, ReqQ>(
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const headers = AuthCookiesSchema.parse(req.cookies);
  const token = headers.token;

  if (!token) {
    throw new EndpointError(401, 'No token provided');
  }

  const auth = jwtService.verify(token);

  if (auth === null) {
    throw new EndpointError(401, 'Failed to authenticate');
  }

  const user = await userService.getUser(auth.id);

  if (user === null) {
    throw new EndpointError(401, 'Failed to authenticate');
  }

  (req as AuthenticatedRequest<P, ResB, ReqB, ReqQ>).user = user;
  next();
};
