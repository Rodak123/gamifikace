import { z } from 'zod';
export declare const UserAchievementLogSchema: z.ZodObject<{
    userId: z.ZodString;
    achievementKey: z.ZodString;
    earnedAt: z.ZodDate;
}, z.core.$strip>;
export type UserAchievementLog = z.infer<typeof UserAchievementLogSchema>;
