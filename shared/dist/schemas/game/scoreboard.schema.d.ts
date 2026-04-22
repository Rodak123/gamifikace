import { z } from 'zod';
export declare const ScoreboardSchema: z.ZodArray<z.ZodObject<{
    user: z.ZodObject<{
        id: z.ZodString;
        nickname: z.ZodString;
        firstName: z.ZodString;
        lastName: z.ZodString;
        pictureUrl: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    totalXp: z.ZodNumber;
    logs: z.ZodArray<z.ZodObject<{
        userId: z.ZodString;
        achievementKey: z.ZodString;
        earnedAt: z.ZodDate;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type Scoreboard = z.infer<typeof ScoreboardSchema>;
