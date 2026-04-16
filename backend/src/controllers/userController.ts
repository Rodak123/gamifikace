import { ENDPOINTS } from '@gamifikace/shared';
import { TypedRequestHandler } from '../utils/typedRequestHandler';

export const getMeInfoHandler: TypedRequestHandler<typeof ENDPOINTS.USER.ME> = async (req) => {
  const user = req.user;

  return {
    user: user,
  };
};
