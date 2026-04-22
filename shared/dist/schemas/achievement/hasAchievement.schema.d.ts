import { z } from 'zod';
export declare const HasAchievementRequestSchema: z.ZodObject<{
    params: z.ZodObject<{}, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
    body: z.ZodObject<{
        achievement: z.ZodObject<{
            key: z.ZodString;
        }, z.core.$strip>;
        user: z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const HasAchievementResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: z.ZodObject<{
        hasAchievement: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
