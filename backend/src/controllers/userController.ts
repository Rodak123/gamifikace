import { ENDPOINTS } from '@gamifikace/shared';
import { TypedRequestHandler } from '../utils/typedRequestHandler';
import { UserService } from '../services/UserService';
import { prisma } from '../config/db';
import { EndpointError } from '../middleware/endpointError';

const userService = new UserService(prisma);

export const getMeInfoHandler: TypedRequestHandler<typeof ENDPOINTS.USER.ME> = async (req) => {
  const user = req.user;

  return {
    user: user,
  };
};

export const getOneUserHandler: TypedRequestHandler<typeof ENDPOINTS.USER.GET_ONE> = async (
  req
) => {
  const user = await userService.getUser(req.params.id);

  if (user === null) {
    throw new EndpointError(400, `User with id: '${req.params.id}' not found`);
  }

  return {
    user: user,
  };
};

export const getAllUsersHandler: TypedRequestHandler<typeof ENDPOINTS.USER.GET_ALL> = async () => {
  const users = await userService.getAllUsers();

  return {
    users: users,
  };
};
