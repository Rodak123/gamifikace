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
  isAuthenticated: false,
  fn: getAllAchievementsHandler,
});

defineRoute(achievementRoutes, {
  definition: ENDPOINTS.ACHIEVEMENT.CREATE,
  isAuthenticated: false,
  fn: createAchievementHandler,
});

defineRoute(achievementRoutes, {
  definition: ENDPOINTS.ACHIEVEMENT.GET_ONE,
  isAuthenticated: false,
  fn: getOneAchievementHandler,
});

export { achievementRoutes };
