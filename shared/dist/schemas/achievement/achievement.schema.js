import { z } from 'zod';
export const AchievementSchema = z.object({
    key: z.string().min(1),
    xp: z.number().min(1),
    name: z.string().min(1),
    description: z.string(),
    createdAt: z.date(),
});
