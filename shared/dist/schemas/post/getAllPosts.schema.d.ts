import { z } from 'zod';
export declare const GetAllPostsRequestSchema: z.ZodObject<{
    body: z.ZodOptional<z.ZodAny>;
    params: z.ZodOptional<z.ZodAny>;
    query: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export declare const GetAllPostsResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
type GetAllPostsRequest = z.infer<typeof GetAllPostsRequestSchema>;
export type GetAllPostsBody = GetAllPostsRequest['body'];
export type GetAllPostsParams = GetAllPostsRequest['params'];
export type GetAllPostsQuery = GetAllPostsRequest['query'];
export type GetAllPostsResponse = z.infer<typeof GetAllPostsResponseSchema>;
export {};
