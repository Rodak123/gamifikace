import { Router } from 'express';
import { ENDPOINTS } from '@gamifikace/shared';
import { devloginHandler, loginHandler, logoutHandler } from '../controllers/authController.js';
import { defineRoute } from '../utils/defineRoute.js';

const authRoutes = Router();

defineRoute(authRoutes, {
  definition: ENDPOINTS.AUTH.LOGIN,
  fn: loginHandler,
});

defineRoute(authRoutes, {
  definition: ENDPOINTS.AUTH.LOGIN_DEV,
  fn: devloginHandler,
});

defineRoute(authRoutes, {
  definition: ENDPOINTS.AUTH.LOGOUT,
  fn: logoutHandler,
});

export { authRoutes };
