import { prisma } from '../config/db.js';
import { AchievementService } from '../services/AchievementService.js';
import { ENDPOINTS } from '@gamifikace/shared';
import { EndpointError } from '../middleware/endpointError.js';
import { TypedRequestHandler } from '../utils/typedRequestHandler.js';

const achievementService = new AchievementService(prisma);

export const createAchievementHandler: TypedRequestHandler<
  typeof ENDPOINTS.ACHIEVEMENT.CREATE
> = async (req) => {
  const newAchievement = await achievementService.createAchievement(
    req.body.key,
    req.body.name,
    req.body.description,
    req.body.xp
  );

  return {
    achievement: newAchievement,
  };
};

export const getAllAchievementsHandler: TypedRequestHandler<
  typeof ENDPOINTS.ACHIEVEMENT.GET_ALL
> = async () => {
  const allAchievements = await achievementService.getAllAchievements();

  return {
    achievements: allAchievements,
  };
};

export const getOneAchievementHandler: TypedRequestHandler<
  typeof ENDPOINTS.ACHIEVEMENT.GET_ONE
> = async (req) => {
  const achievement = await achievementService.getOneAchievement(req.params.key);

  if (achievement === null) {
    throw new EndpointError(400, 'Achievement not found');
  }

  return {
    achievement: achievement,
  };
};
