import { RequestHandler } from 'express';
import { prisma } from '../config/db.js';
import { respondWith } from '../utils/respondWith.js';
import { AchievementService } from '../services/AchievementService.js';
import {
  CreateAchievementParams,
  CreateAchievementResponse,
  CreateAchievementBody,
  CreateAchievementQuery,
  CreateAchievementResponseSchema,
  GetOneAchievementParams,
  GetOneAchievementResponse,
  GetOneAchievementBody,
  GetOneAchievementQuery,
  GetOneAchievementResponseSchema,
  GetAllAchievementsBody,
  GetAllAchievementsParams,
  GetAllAchievementsQuery,
  GetAllAchievementsResponse,
  GetAllAchievementsResponseSchema,
} from '@gamifikace/shared';
import { EndpointError } from '../middleware/endpointError.js';

const achievementService = new AchievementService(prisma);

export const createAchievementHandler: RequestHandler<
  CreateAchievementParams,
  CreateAchievementResponse,
  CreateAchievementBody,
  CreateAchievementQuery
> = async (req, res) => {
  const newAchievement = await achievementService.createAchievement(
    req.body.key,
    req.body.name,
    req.body.description,
    req.body.xp
  );

  respondWith(res, 200, CreateAchievementResponseSchema, {
    achievement: newAchievement,
  });
};

export const getAllAchievementsHandler: RequestHandler<
  GetAllAchievementsParams,
  GetAllAchievementsResponse,
  GetAllAchievementsBody,
  GetAllAchievementsQuery
> = async (_req, res) => {
  const allAchievements = await achievementService.getAllAchievements();

  respondWith(res, 200, GetAllAchievementsResponseSchema, {
    achievements: allAchievements,
  });
};

export const getOneAchievementHandler: RequestHandler<
  GetOneAchievementParams,
  GetOneAchievementResponse,
  GetOneAchievementBody,
  GetOneAchievementQuery
> = async (req, res) => {
  const achievement = await achievementService.getOneAchievement(req.params.key);

  if (achievement === null) {
    throw new EndpointError(400, 'Achievement not found');
  }

  respondWith(res, 200, GetOneAchievementResponseSchema, {
    achievement: achievement,
  });
};
