import { Router } from 'express';
import { ENDPOINTS } from '@gamifikace/shared';
import { getMeInfoHandler } from '../controllers/userController.js';
import { defineRoute } from '../utils/defineRoute.js';

const userRoutes = Router();

defineRoute(userRoutes, {
  definition: ENDPOINTS.USER.ME,
  fn: getMeInfoHandler,
});

export { userRoutes };
