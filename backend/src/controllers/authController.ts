import {
  LoginParams,
  LoginResponse,
  LoginBody,
  LoginQuery,
  LoginResponseSchema,
  DevLoginBody,
  DevLoginParams,
  DevLoginQuery,
  DevLoginResponse,
  DevLoginResponseSchema,
  User,
  LogoutBody,
  LogoutParams,
  LogoutQuery,
  LogoutResponse,
  LogoutResponseSchema,
} from '@gamifikace/shared';
import { RequestHandler } from 'express';
import { prisma } from '../config/db';
import { respondWith } from '../utils/respondWith';
import { UserService } from '../services/UserService';
import { OAuth2Client } from 'google-auth-library';
import { env } from '../config/env';
import { JWTService } from '../services/JWTService';
import { Response } from 'express';
import { EndpointError } from '../middleware/endpointError';
import { AUTH_COOKIE_NAME, AuthenticatedRequestHandler } from '../middleware/authRequest';

const userService = new UserService(prisma);
const jwtService = new JWTService();
const oauthClient = new OAuth2Client(env.GOOGLE_CLIENT_ID);

const loginWithUser = (res: Response, user: User) => {
  const token = jwtService.sign(user);

  res.cookie(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });
};

export const loginHandler: RequestHandler<
  LoginParams,
  LoginResponse,
  LoginBody,
  LoginQuery
> = async (req, res) => {
  const ticket = await oauthClient.verifyIdToken({
    idToken: req.body.credential,
    audience: env.GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();

  if (!payload || payload.email === undefined) {
    throw new EndpointError(400, 'Invalid Google token');
  }

  const user = await userService.findOrCreateUser(
    payload.email,
    payload.name ?? 'User',
    payload.given_name ?? '',
    payload.family_name ?? ''
  );

  loginWithUser(res, user);

  respondWith(res, 200, LoginResponseSchema, {
    user,
  });
};

export const devloginHandler: RequestHandler<
  DevLoginParams,
  DevLoginResponse,
  DevLoginBody,
  DevLoginQuery
> = async (_req, res) => {
  if (env.NODE_ENV !== 'development') {
    throw new EndpointError(403, 'Development login is not available');
  }

  const payload = {
    email: 'user@test.com',
    name: 'John Doe',
    given_name: 'John',
    family_name: 'Doe',
  };

  const user = await userService.findOrCreateUser(
    payload.email,
    payload.name,
    payload.given_name,
    payload.family_name
  );

  loginWithUser(res, user);

  respondWith(res, 200, DevLoginResponseSchema, {
    user,
  });
};

export const logoutHandler: AuthenticatedRequestHandler<
  LogoutParams,
  LogoutResponse,
  LogoutBody,
  LogoutQuery
> = async (_req, res) => {
  res.clearCookie(AUTH_COOKIE_NAME);

  respondWith(res, 200, LogoutResponseSchema, {
    loggedOut: true,
  });
};
