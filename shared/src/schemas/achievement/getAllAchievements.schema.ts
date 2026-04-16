import {
  BaseRequestSchema,
  SuccessResponseSchemaWithData,
} from '../baseEndpont.schema';
import { AchievementSchema } from './achievement.schema';
import { z } from 'zod';

export const GetAllAchievementsRequestSchema = BaseRequestSchema;

export const GetAllAchievementsResponseSchema = SuccessResponseSchemaWithData(
  z.object({
    achievements: z.array(AchievementSchema),
  }),
);
