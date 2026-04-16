import { Router } from 'express';
import { ENDPOINTS } from '@gamifikace/shared';
import { getHealthHandler } from '../controllers/rootController.js';
import { defineRoute } from '../utils/defineRoute.js';

const rootRoutes = Router();

defineRoute(rootRoutes, {
  definition: ENDPOINTS.ROOT.HEALTH,
  fn: getHealthHandler,
});

export { rootRoutes };
