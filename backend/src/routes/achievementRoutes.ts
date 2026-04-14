import { Router } from 'express';
import { validateWith } from '../middleware/validateWith.js';
import { catchAsync } from '../middleware/catchAsync.js';
import {
  CreateAchievementRequestSchema,
  ENDPOINTS,
  GetAllAchievementsRequestSchema,
  GetOneAchievementRequestSchema,
} from '@gamifikace/shared';
import {
  getAllAchievementsHandler,
  createAchievementHandler,
  getOneAchievementHandler,
} from '../controllers/achievementController.js';

const achievementRoutes = Router();

achievementRoutes.post(
  ENDPOINTS.ACHIEVEMENT.GET_ALL(),
  validateWith(GetAllAchievementsRequestSchema),
  catchAsync(getAllAchievementsHandler)
);
achievementRoutes.post(
  ENDPOINTS.ACHIEVEMENT.CREATE(),
  validateWith(CreateAchievementRequestSchema),
  catchAsync(createAchievementHandler)
);

achievementRoutes.post(
  ENDPOINTS.ACHIEVEMENT.GET_ONE(':key'),
  validateWith(GetOneAchievementRequestSchema),
  catchAsync(getOneAchievementHandler)
);

export { achievementRoutes };
