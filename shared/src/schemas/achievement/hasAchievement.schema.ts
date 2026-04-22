import {
  BaseRequestSchema,
  SuccessResponseSchemaWithData,
} from '../baseEndpont.schema';
import { UserSchema } from '../user/user.schema';
import { AchievementSchema } from './achievement.schema';
import { z } from 'zod';

export const HasAchievementRequestSchema = BaseRequestSchema.extend({
  body: z.object({
    achievement: AchievementSchema.pick({ key: true }),
    user: UserSchema.pick({ id: true }),
  }),
});

export const HasAchievementResponseSchema = SuccessResponseSchemaWithData(
  z.object({
    hasAchievement: z.boolean(),
  }),
);
