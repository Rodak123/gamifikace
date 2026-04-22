import { z } from 'zod';
import { SharedUserSchema } from '../user/user.schema';
import { UserAchievementLogSchema } from '../userAchievementLog/userAchievementLog.schema';
export const ScoreboardSchema = z.array(z.object({
    user: SharedUserSchema,
    totalXp: z.number(),
    logs: z.array(UserAchievementLogSchema),
}));
