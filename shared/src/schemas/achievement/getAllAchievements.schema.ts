import {
  BaseRequestSchema,
  SuccessResponseSchema,
} from '../baseEndpont.schema';
import { AchievementSchema } from './achievement.schema';
import { z } from 'zod';

export const GetAllAchievementsRequestSchema = BaseRequestSchema.extend({});

export const GetAllAchievementsResponseSchema = SuccessResponseSchema(
  z.array(AchievementSchema),
);

type GetAllAchievementsRequest = z.infer<
  typeof GetAllAchievementsRequestSchema
>;

export type GetAllAchievementsBody = GetAllAchievementsRequest['body'];
export type GetAllAchievementsParams = GetAllAchievementsRequest['params'];
export type GetAllAchievementsQuery = GetAllAchievementsRequest['query'];

export type GetAllAchievementsResponse = z.infer<
  typeof GetAllAchievementsResponseSchema
>;
