import { z } from 'zod';
export declare const GetOneAchievementRequestSchema: z.ZodObject<{
    body: z.ZodObject<{}, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
    params: z.ZodObject<{
        key: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const GetOneAchievementResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: z.ZodObject<{
        achievement: z.ZodObject<{
            key: z.ZodString;
            xp: z.ZodNumber;
            name: z.ZodString;
            description: z.ZodString;
            createdAt: z.ZodDate;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
