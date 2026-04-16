import { z } from 'zod';
export declare const CreateAchievementRequestSchema: z.ZodObject<{
    params: z.ZodObject<{}, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
    body: z.ZodObject<{
        key: z.ZodString;
        description: z.ZodString;
        xp: z.ZodNumber;
        name: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const CreateAchievementResponseSchema: z.ZodObject<{
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
