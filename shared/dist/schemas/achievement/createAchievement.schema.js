import { BaseRequestSchema, SuccessResponseSchema, } from '../baseEndpont.schema';
import { AchievementSchema } from './achievement.schema';
import { z } from 'zod';
export const CreateAchievementRequestSchema = BaseRequestSchema.extend({
    body: AchievementSchema.omit({ createdAt: true }),
});
export const CreateAchievementResponseSchema = SuccessResponseSchema(z.object({
    achievement: AchievementSchema,
}));
