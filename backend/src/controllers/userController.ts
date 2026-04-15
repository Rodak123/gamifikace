import {
  GetUserInfoBody,
  GetUserInfoParams,
  GetUserInfoQuery,
  GetUserInfoResponse,
  GetUserInfoResponseSchema,
} from '@gamifikace/shared';
import { respondWith } from '../utils/respondWith';
import { AuthenticatedRequestHandler } from '../middleware/authRequest';

export const getUserInfoHandler: AuthenticatedRequestHandler<
  GetUserInfoParams,
  GetUserInfoResponse,
  GetUserInfoBody,
  GetUserInfoQuery
> = async (req, res) => {
  const user = req.user;

  respondWith(res, 200, GetUserInfoResponseSchema, {
    user: user,
  });
};
