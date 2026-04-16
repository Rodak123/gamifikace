import { z } from 'zod';
export declare const EarnAchievementRequestSchema: z.ZodObject<{
    params: z.ZodObject<{}, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
    body: {
        achievement: z.ZodObject<{
            key: z.ZodString;
        }, z.core.$strip>;
        user: z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>;
    };
}, z.core.$strip>;
export declare const EarnAchievementResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: z.ZodObject<{
        log: z.ZodObject<{
            userId: z.ZodString;
            achievementKey: z.ZodString;
            earnedAt: z.ZodDate;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
