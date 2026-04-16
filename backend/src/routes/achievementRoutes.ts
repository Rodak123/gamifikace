import { Router } from 'express';
import { ENDPOINTS } from '@gamifikace/shared';
import {
  getAllAchievementsHandler,
  createAchievementHandler,
  getOneAchievementHandler,
} from '../controllers/achievementController.js';
import { defineRoute } from '../utils/defineRoute.js';

const achievementRoutes = Router();

defineRoute(achievementRoutes, {
  definition: ENDPOINTS.ACHIEVEMENT.GET_ALL,
  fn: getAllAchievementsHandler,
});

defineRoute(achievementRoutes, {
  definition: ENDPOINTS.ACHIEVEMENT.CREATE,
  fn: createAchievementHandler,
});

defineRoute(achievementRoutes, {
  definition: ENDPOINTS.ACHIEVEMENT.GET_ONE,
  fn: getOneAchievementHandler,
});

export { achievementRoutes };
