import { Router } from 'express';
import { ENDPOINTS, HealthRequestSchema } from '@gamifikace/shared';
import { validateWith } from '../middleware/validateWith.js';
import { catchAsync } from '../middleware/catchAsync.js';
import { getHealthHandler } from '../controllers/rootController.js';

const rootRoutes = Router();

rootRoutes.get(
  ENDPOINTS.ROOT.HEALTH(),
  validateWith(HealthRequestSchema),
  catchAsync(getHealthHandler)
);

export { rootRoutes };
