import { z } from 'zod';
export declare const GetOneUserRequestSchema: z.ZodObject<{
    body: z.ZodOptional<z.ZodAny>;
    query: z.ZodOptional<z.ZodAny>;
    params: z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const GetOneUserResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        nickname: z.ZodString;
        firstName: z.ZodString;
        lastName: z.ZodString;
        createdAt: z.ZodDate;
    }, z.core.$strip>;
}, z.core.$strip>;
type GetOneUserRequest = z.infer<typeof GetOneUserRequestSchema>;
export type GetOneUserBody = GetOneUserRequest['body'];
export type GetOneUserParams = GetOneUserRequest['params'];
export type GetOneUserQuery = GetOneUserRequest['query'];
export type GetOneUserResponse = z.infer<typeof GetOneUserResponseSchema>;
export {};
