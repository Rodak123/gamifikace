import { z } from 'zod';
export declare const CreateAchievementRequestSchema: z.ZodObject<{
    body: z.ZodOptional<z.ZodAny>;
    query: z.ZodOptional<z.ZodAny>;
    params: z.ZodObject<{
        description: z.ZodString;
        xp: z.ZodNumber;
        name: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const CreateAchievementResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: z.ZodObject<{
        key: z.ZodString;
        xp: z.ZodNumber;
        name: z.ZodString;
        description: z.ZodString;
        createdAt: z.ZodDate;
    }, z.core.$strip>;
}, z.core.$strip>;
type CreateAchievementRequest = z.infer<typeof CreateAchievementRequestSchema>;
export type CreateAchievementBody = CreateAchievementRequest['body'];
export type CreateAchievementParams = CreateAchievementRequest['params'];
export type CreateAchievementQuery = CreateAchievementRequest['query'];
export type CreateAchievementResponse = z.infer<typeof CreateAchievementResponseSchema>;
export {};
