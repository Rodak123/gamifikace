import { z } from 'zod';
export declare const GetOneUserRequestSchema: z.ZodObject<{
    body: z.ZodObject<{}, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
    params: z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const GetOneUserResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: z.ZodObject<{
        user: z.ZodObject<{
            id: z.ZodString;
            nickname: z.ZodString;
            firstName: z.ZodString;
            lastName: z.ZodString;
            createdAt: z.ZodDate;
            role: z.ZodEnum<{
                readonly USER: "USER";
                readonly ADMIN: "ADMIN";
                readonly SUPERADMIN: "SUPERADMIN";
            }>;
            pictureUrl: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
