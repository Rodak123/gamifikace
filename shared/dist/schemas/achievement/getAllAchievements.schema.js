import { BaseRequestSchema, SuccessResponseSchema, } from '../baseEndpont.schema';
import { AchievementSchema } from './achievement.schema';
import { z } from 'zod';
export const GetAllAchievementsRequestSchema = BaseRequestSchema.extend({});
export const GetAllAchievementsResponseSchema = SuccessResponseSchema(z.object({
    achievements: z.array(AchievementSchema),
}));
