import { z } from 'zod';
export declare const CreatePostRequestSchema: z.ZodObject<{
    params: z.ZodOptional<z.ZodAny>;
    query: z.ZodOptional<z.ZodAny>;
    body: any;
}, z.core.$strip>;
export declare const CreatePostResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: any;
}, z.core.$strip>;
type CreatePostRequest = z.infer<typeof CreatePostRequestSchema>;
export type CreatePostBody = CreatePostRequest['body'];
export type CreatePostParams = CreatePostRequest['params'];
export type CreatePostQuery = CreatePostRequest['query'];
export type CreatePostResponse = z.infer<typeof CreatePostResponseSchema>;
export {};
