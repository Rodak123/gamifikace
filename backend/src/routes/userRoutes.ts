import { Router } from 'express';
import { ENDPOINTS, GetUserInfoRequestSchema } from '@gamifikace/shared';
import { getUserInfoHandler } from '../controllers/userController.js';
import { defineRoute } from '../utils/defineRoute.js';

const userRoutes = Router();

defineRoute(userRoutes, {
  method: 'post',
  path: ENDPOINTS.USER.INFO(),
  isAuthenticated: true,
  requestSchema: GetUserInfoRequestSchema,
  fn: getUserInfoHandler,
});

export { userRoutes };
