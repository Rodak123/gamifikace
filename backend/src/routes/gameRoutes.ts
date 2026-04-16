import { Router } from 'express';
import { ENDPOINTS } from '@gamifikace/shared';
import { defineRoute } from '../utils/defineRoute.js';
import { getScoreboardHandler } from '../controllers/gameController.js';

const gameRoutes = Router();

defineRoute(gameRoutes, {
  definition: ENDPOINTS.GAME.GET_SCOREBOARD,
  fn: getScoreboardHandler,
});

export { gameRoutes };
