import { z } from 'zod';
export declare const CreateAchievementRequestSchema: z.ZodObject<{
    params: z.ZodObject<{}, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
    body: z.ZodObject<{
        key: z.ZodString;
        xp: z.ZodNumber;
        name: z.ZodString;
        description: z.ZodString;
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
type CreateAchievementRequest = z.infer<typeof CreateAchievementRequestSchema>;
export type CreateAchievementBody = CreateAchievementRequest['body'];
export type CreateAchievementParams = CreateAchievementRequest['params'];
export type CreateAchievementQuery = CreateAchievementRequest['query'];
export type CreateAchievementResponse = z.infer<typeof CreateAchievementResponseSchema>;
export {};
