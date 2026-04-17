import { Router } from 'express';
import { ENDPOINTS } from '@gamifikace/shared';
import {
  getAllUsersHandler,
  getMeInfoHandler,
  getOneUserHandler,
} from '../controllers/userController.js';
import { defineRoute } from '../utils/defineRoute.js';

const userRoutes = Router();

defineRoute(userRoutes, {
  definition: ENDPOINTS.USER.ME,
  fn: getMeInfoHandler,
});

defineRoute(userRoutes, {
  definition: ENDPOINTS.USER.GET_ALL,
  fn: getAllUsersHandler,
});

defineRoute(userRoutes, {
  definition: ENDPOINTS.USER.GET_ONE,
  fn: getOneUserHandler,
});

export { userRoutes };
