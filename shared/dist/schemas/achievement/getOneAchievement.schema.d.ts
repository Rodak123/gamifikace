import { z } from 'zod';
export declare const GetOneAchievementRequestSchema: z.ZodObject<{
    body: z.ZodOptional<z.ZodAny>;
    query: z.ZodOptional<z.ZodAny>;
    params: z.ZodObject<{
        key: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const GetOneAchievementResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: z.ZodObject<{
        key: z.ZodString;
        xp: z.ZodNumber;
        name: z.ZodString;
        description: z.ZodString;
        createdAt: z.ZodDate;
    }, z.core.$strip>;
}, z.core.$strip>;
type GetOneAchievementRequest = z.infer<typeof GetOneAchievementRequestSchema>;
export type GetOneAchievementBody = GetOneAchievementRequest['body'];
export type GetOneAchievementParams = GetOneAchievementRequest['params'];
export type GetOneAchievementQuery = GetOneAchievementRequest['query'];
export type GetOneAchievementResponse = z.infer<typeof GetOneAchievementResponseSchema>;
export {};
