import { z } from 'zod';

export const UserAchievementLogSchema = z.object({
  userId: z.string().min(1),
  achievementKey: z.string().min(1),
  earnedAt: z.date(),
});

export type UserAchievementLog = z.infer<typeof UserAchievementLogSchema>;
