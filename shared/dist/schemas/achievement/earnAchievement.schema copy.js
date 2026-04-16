import { BaseRequestSchema, SuccessResponseSchemaWithData, } from '../baseEndpont.schema';
import { UserSchema } from '../user/user.schema';
import { UserAchievementLogSchema } from '../userAchievementLog/userAchievementLog.schema';
import { AchievementSchema } from './achievement.schema';
import { z } from 'zod';
export const EarnAchievementRequestSchema = BaseRequestSchema.extend({
    body: z.object({
        achievement: AchievementSchema.pick({ key: true }),
        user: UserSchema.pick({ id: true }),
    }),
});
export const EarnAchievementResponseSchema = SuccessResponseSchemaWithData(z.object({
    log: UserAchievementLogSchema,
}));
