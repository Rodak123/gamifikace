import { prisma } from '../config/db.js';
import { ENDPOINTS } from '@gamifikace/shared';
import { TypedRequestHandler } from '../utils/typedRequestHandler.js';
import { GameService } from '../services/GameService.js';

const gameService = new GameService(prisma);

export const getScoreboardHandler: TypedRequestHandler<
  typeof ENDPOINTS.GAME.GET_SCOREBOARD
> = async () => {
  const scoreboard = await gameService.getScoreboard();

  return {
    scoreboard: scoreboard,
  };
};
