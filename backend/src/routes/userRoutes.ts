import { Router } from 'express';
import { ENDPOINTS, GetUserInfoRequestSchema } from '@gamifikace/shared';
import { getUserInfoHandler } from '../controllers/userController.js';
import { defineRoute } from '../utils/defineRoute.js';

const userRoutes = Router();

defineRoute(userRoutes, {
  definition: ENDPOINTS.USER.INFO,
  isAuthenticated: true,
  fn: getUserInfoHandler,
});

export { userRoutes };
