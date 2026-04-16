import { z } from 'zod';
export declare const ScoreboardSchema: z.ZodArray<z.ZodObject<{
    user: z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
    score: z.ZodNumber;
    log: z.ZodArray<z.ZodObject<{
        userId: z.ZodString;
        achievementKey: z.ZodString;
        earnedAt: z.ZodDate;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type Scoreboard = z.infer<typeof ScoreboardSchema>;
