import { BaseRequestSchema, SuccessResponseSchema, } from '../baseEndpont.schema';
import { AchievementSchema } from './achievement.schema';
import { z } from 'zod';
export const GetOneAchievementRequestSchema = BaseRequestSchema.extend({
    params: AchievementSchema.pick({ key: true }),
});
export const GetOneAchievementResponseSchema = SuccessResponseSchema(z.object({
    achievement: AchievementSchema,
}));
