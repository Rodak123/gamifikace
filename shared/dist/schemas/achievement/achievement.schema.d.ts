import { z } from 'zod';
export declare const AchievementSchema: z.ZodObject<{
    key: z.ZodString;
    xp: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodString;
    createdAt: z.ZodDate;
}, z.core.$strip>;
export type Achievement = z.infer<typeof AchievementSchema>;
