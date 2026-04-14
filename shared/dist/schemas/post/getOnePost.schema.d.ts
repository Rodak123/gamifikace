import { z } from 'zod';
export declare const GetOnePostRequestSchema: z.ZodObject<{
    body: z.ZodOptional<z.ZodAny>;
    query: z.ZodOptional<z.ZodAny>;
    params: z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const GetOnePostResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        content: z.ZodString;
        createdAt: z.ZodDate;
    }, z.core.$strip>;
}, z.core.$strip>;
type GetOnePostRequest = z.infer<typeof GetOnePostRequestSchema>;
export type GetOnePostBody = GetOnePostRequest['body'];
export type GetOnePostParams = GetOnePostRequest['params'];
export type GetOnePostQuery = GetOnePostRequest['query'];
export type GetOnePostResponse = z.infer<typeof GetOnePostResponseSchema>;
export {};
