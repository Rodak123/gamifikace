import {
  BaseRequestSchema,
  SuccessResponseSchema,
} from '../baseEndpont.schema';
import { AchievementSchema } from './achievement.schema';
import { z } from 'zod';

export const GetOneAchievementRequestSchema = BaseRequestSchema.extend({
  params: AchievementSchema.pick({ key: true }),
});

export const GetOneAchievementResponseSchema =
  SuccessResponseSchema(AchievementSchema);

type GetOneAchievementRequest = z.infer<typeof GetOneAchievementRequestSchema>;

export type GetOneAchievementBody = GetOneAchievementRequest['body'];
export type GetOneAchievementParams = GetOneAchievementRequest['params'];
export type GetOneAchievementQuery = GetOneAchievementRequest['query'];

export type GetOneAchievementResponse = z.infer<
  typeof GetOneAchievementResponseSchema
>;
