import {
  BaseRequestSchema,
  SuccessResponseSchema,
} from '../baseEndpont.schema';
import { AchievementSchema } from './achievement.schema';
import { z } from 'zod';

export const CreateAchievementRequestSchema = BaseRequestSchema.extend({
  body: AchievementSchema.omit({ createdAt: true }),
});

export const CreateAchievementResponseSchema =
  SuccessResponseSchema(AchievementSchema);

type CreateAchievementRequest = z.infer<typeof CreateAchievementRequestSchema>;

export type CreateAchievementBody = CreateAchievementRequest['body'];
export type CreateAchievementParams = CreateAchievementRequest['params'];
export type CreateAchievementQuery = CreateAchievementRequest['query'];

export type CreateAchievementResponse = z.infer<
  typeof CreateAchievementResponseSchema
>;
