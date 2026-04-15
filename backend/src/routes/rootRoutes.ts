import { Router } from 'express';
import { ENDPOINTS, HealthRequestSchema } from '@gamifikace/shared';
import { getHealthHandler } from '../controllers/rootController.js';
import { defineRoute } from '../utils/defineRoute.js';

const rootRoutes = Router();

defineRoute(rootRoutes, {
  method: 'get',
  path: ENDPOINTS.ROOT.HEALTH(),
  isAuthenticated: false,
  requestSchema: HealthRequestSchema,
  fn: getHealthHandler,
});

export { rootRoutes };
