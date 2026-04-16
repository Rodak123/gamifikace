import { z } from 'zod';
import { UserSchema } from '../user/user.schema';
import { UserAchievementLogSchema } from '../userAchievementLog/userAchievementLog.schema';
export const ScoreboardSchema = z.array(z.object({
    user: UserSchema.pick({ id: true }),
    totalXp: z.number(),
    logs: z.array(UserAchievementLogSchema),
}));
