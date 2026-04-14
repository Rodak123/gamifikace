import { BaseRequestSchema, SuccessResponseSchema, } from '../baseEndpont.schema';
import { AchievementSchema } from './achievement.schema';
import { z } from 'zod';
export const GetAllAchievementsRequestSchema = BaseRequestSchema.extend({
    params: AchievementSchema.pick({ key: true }),
});
export const GetAllAchievementsResponseSchema = SuccessResponseSchema(z.array(AchievementSchema));
