import { ENDPOINTS } from '@gamifikace/shared';
import { TypedRequestHandler } from '../utils/typedRequestHandler';

export const getUserInfoHandler: TypedRequestHandler<typeof ENDPOINTS.USER.INFO> = async (req) => {
  const user = req.user;

  return {
    user: user,
  };
};
