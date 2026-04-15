import { z } from 'zod';
export declare const GetUserInfoRequestSchema: z.ZodObject<{
    body: z.ZodObject<{}, z.core.$strip>;
    params: z.ZodObject<{}, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>;
export declare const GetUserInfoResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: z.ZodObject<{
        user: z.ZodObject<{
            id: z.ZodString;
            email: z.ZodString;
            nickname: z.ZodString;
            firstName: z.ZodString;
            lastName: z.ZodString;
            createdAt: z.ZodDate;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
type GetUserInfoRequest = z.infer<typeof GetUserInfoRequestSchema>;
export type GetUserInfoBody = GetUserInfoRequest['body'];
export type GetUserInfoParams = GetUserInfoRequest['params'];
export type GetUserInfoQuery = GetUserInfoRequest['query'];
export type GetUserInfoResponse = z.infer<typeof GetUserInfoResponseSchema>;
export {};
