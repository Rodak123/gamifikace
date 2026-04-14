import { BaseRequestSchema, SuccessResponseSchema, } from '../baseEndpont.schema';
import { AchievementSchema } from './achievement.schema';
export const CreateAchievementRequestSchema = BaseRequestSchema.extend({
    body: AchievementSchema.omit({ createdAt: true }),
});
export const CreateAchievementResponseSchema = SuccessResponseSchema(AchievementSchema);
