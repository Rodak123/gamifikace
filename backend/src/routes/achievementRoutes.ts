import { Router } from 'express';
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
import { defineRoute } from '../utils/defineRoute.js';

const achievementRoutes = Router();

defineRoute(achievementRoutes, {
  method: 'post',
  path: ENDPOINTS.ACHIEVEMENT.GET_ALL(),
  isAuthenticated: false,
  requestSchema: GetAllAchievementsRequestSchema,
  fn: getAllAchievementsHandler,
});

defineRoute(achievementRoutes, {
  method: 'post',
  path: ENDPOINTS.ACHIEVEMENT.CREATE(),
  isAuthenticated: false,
  requestSchema: CreateAchievementRequestSchema,
  fn: createAchievementHandler,
});

defineRoute(achievementRoutes, {
  method: 'post',
  path: ENDPOINTS.ACHIEVEMENT.GET_ONE(':key'),
  isAuthenticated: false,
  requestSchema: GetOneAchievementRequestSchema,
  fn: getOneAchievementHandler,
});

export { achievementRoutes };
