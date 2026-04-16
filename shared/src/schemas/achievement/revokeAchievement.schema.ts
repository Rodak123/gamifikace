import {
  BaseRequestSchema,
  SuccessResponseSchemaWithData,
} from '../baseEndpont.schema';
import { UserSchema } from '../user/user.schema';
import { AchievementSchema } from './achievement.schema';
import { z } from 'zod';

export const RevokeAchievementRequestSchema = BaseRequestSchema.extend({
  body: z.object({
    achievement: AchievementSchema.pick({ key: true }),
    user: UserSchema.pick({ id: true }),
  }),
});

export const RevokeAchievementResponseSchema = SuccessResponseSchemaWithData(
  z.object({
    achievementRevoked: z.literal(true),
  }),
);
