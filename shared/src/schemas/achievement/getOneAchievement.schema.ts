import {
  BaseRequestSchema,
  SuccessResponseSchemaWithData,
} from '../baseEndpont.schema';
import { AchievementSchema } from './achievement.schema';
import { z } from 'zod';

export const GetOneAchievementRequestSchema = BaseRequestSchema.extend({
  params: z.object({ key: AchievementSchema.shape.key }),
});

export const GetOneAchievementResponseSchema = SuccessResponseSchemaWithData(
  z.object({
    achievement: AchievementSchema,
  }),
);
