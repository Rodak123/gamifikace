import { z } from 'zod';
export declare const LoginRequestSchema: z.ZodObject<{
    params: z.ZodObject<{}, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
    body: z.ZodObject<{
        credential: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const LoginResponseSchema: z.ZodObject<{
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
type LoginRequest = z.infer<typeof LoginRequestSchema>;
export type LoginBody = LoginRequest['body'];
export type LoginParams = LoginRequest['params'];
export type LoginQuery = LoginRequest['query'];
export type LoginResponse = z.infer<typeof LoginResponseSchema>;
export {};
