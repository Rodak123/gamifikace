import { User, ENDPOINTS, ROLES } from '@gamifikace/shared';
import { prisma } from '../config/db';
import { UserService } from '../services/UserService';
import { OAuth2Client } from 'google-auth-library';
import { google } from 'googleapis';
import { env } from '../config/env';
import { JWTService } from '../services/JWTService';
import { Response } from 'express';
import { EndpointError } from '../middleware/endpointError';
import { AUTH_COOKIE_NAME } from '../middleware/authRequest';
import { TypedRequestHandler } from '../utils/typedRequestHandler';

const userService = new UserService(prisma);
const jwtService = new JWTService();

const loginWithUser = (res: Response, user: User) => {
  const token = jwtService.sign(user);

  res.cookie(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });
};

const getUserInfo = async (accessToken: string) => {
  try {
    const client = new OAuth2Client();
    client.setCredentials({ access_token: accessToken });

    const oauth2 = google.oauth2({ version: 'v2', auth: client });

    const userInfoResponse = await oauth2.userinfo.get();
    const payload = userInfoResponse.data;

    if (!payload || !payload.email) {
      throw new EndpointError(400, 'Invalid Google token: No email provided');
    }

    return payload;
  } catch (error) {
    throw new EndpointError(401, `Failed to verify access token with Google: ${error}`);
  }
};

export const loginHandler: TypedRequestHandler<typeof ENDPOINTS.AUTH.LOGIN> = async (req, res) => {
  const accessToken = req.body.credential;

  const payload = await getUserInfo(accessToken);

  const user = await userService.findOrCreateUser(
    payload.email!,
    payload.name ?? 'User',
    payload.given_name ?? '',
    payload.family_name ?? '',
    undefined,
    payload.picture ?? undefined
  );

  loginWithUser(res, user);

  return {
    user,
  };
};

export const devloginHandler: TypedRequestHandler<typeof ENDPOINTS.AUTH.LOGIN_DEV> = async (
  _req,
  res
) => {
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
    payload.family_name,
    ROLES.SUPERADMIN,
    'https://picsum.photos/64/64'
  );

  loginWithUser(res, user);

  return {
    user,
  };
};

export const logoutHandler: TypedRequestHandler<typeof ENDPOINTS.AUTH.LOGOUT> = async (
  _req,
  res
) => {
  res.clearCookie(AUTH_COOKIE_NAME);

  return {
    loggedOut: true,
  };
};
