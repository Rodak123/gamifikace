import { BaseRequestSchema, SuccessResponseSchema, } from '../baseEndpont.schema';
import { AchievementSchema } from './achievement.schema';
export const CreateAchievementRequestSchema = BaseRequestSchema.extend({
    params: AchievementSchema.omit({ key: true, createdAt: true }),
});
export const CreateAchievementResponseSchema = SuccessResponseSchema(AchievementSchema);
