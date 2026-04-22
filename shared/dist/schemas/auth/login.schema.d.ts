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
            role: z.ZodEnum<{
                readonly USER: "USER";
                readonly ADMIN: "ADMIN";
                readonly SUPERADMIN: "SUPERADMIN";
            }>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
