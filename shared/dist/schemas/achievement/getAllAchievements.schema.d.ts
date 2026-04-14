import { z } from 'zod';
export declare const GetAllAchievementsRequestSchema: z.ZodObject<{
    body: z.ZodOptional<z.ZodAny>;
    params: z.ZodOptional<z.ZodAny>;
    query: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export declare const GetAllAchievementsResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        xp: z.ZodNumber;
        name: z.ZodString;
        description: z.ZodString;
        createdAt: z.ZodDate;
    }, z.core.$strip>>;
}, z.core.$strip>;
type GetAllAchievementsRequest = z.infer<typeof GetAllAchievementsRequestSchema>;
export type GetAllAchievementsBody = GetAllAchievementsRequest['body'];
export type GetAllAchievementsParams = GetAllAchievementsRequest['params'];
export type GetAllAchievementsQuery = GetAllAchievementsRequest['query'];
export type GetAllAchievementsResponse = z.infer<typeof GetAllAchievementsResponseSchema>;
export {};
