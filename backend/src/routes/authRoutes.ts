import { Router } from 'express';
import {
  DevLoginRequestSchema,
  ENDPOINTS,
  LoginRequestSchema,
  LogoutRequestSchema,
} from '@gamifikace/shared';
import { devloginHandler, loginHandler, logoutHandler } from '../controllers/authController.js';
import { defineRoute } from '../utils/defineRoute.js';

const authRoutes = Router();

defineRoute(authRoutes, {
  method: 'post',
  path: ENDPOINTS.AUTH.LOGIN(),
  isAuthenticated: false,
  requestSchema: LoginRequestSchema,
  fn: loginHandler,
});

defineRoute(authRoutes, {
  method: 'post',
  path: ENDPOINTS.AUTH.LOGIN_DEV(),
  isAuthenticated: false,
  requestSchema: DevLoginRequestSchema,
  fn: devloginHandler,
});

defineRoute(authRoutes, {
  method: 'post',
  path: ENDPOINTS.AUTH.LOGOUT(),
  isAuthenticated: true,
  requestSchema: LogoutRequestSchema,
  fn: logoutHandler,
});

export { authRoutes };
