import { BaseRequestSchema, SuccessResponseSchema, } from '../baseEndpont.schema';
import { AchievementSchema } from './achievement.schema';
export const GetOneAchievementRequestSchema = BaseRequestSchema.extend({
    params: AchievementSchema.pick({ key: true }),
});
export const GetOneAchievementResponseSchema = SuccessResponseSchema(AchievementSchema);
