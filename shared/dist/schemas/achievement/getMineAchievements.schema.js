import { BaseRequestSchema, SuccessResponseSchemaWithData, } from '../baseEndpont.schema';
import { z } from 'zod';
import { AchievementSchema } from './achievement.schema';
export const GetMineAchievementsRequestSchema = BaseRequestSchema;
export const GetMineAchievementsResponseSchema = SuccessResponseSchemaWithData(z.object({
    achievements: z.array(AchievementSchema),
}));
