import { z } from 'zod';
export declare const GetAllUsersRequestSchema: z.ZodObject<{
    body: z.ZodObject<{}, z.core.$strip>;
    params: z.ZodObject<{}, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>;
export declare const GetAllUsersResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: z.ZodObject<{
        users: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            nickname: z.ZodString;
            firstName: z.ZodString;
            lastName: z.ZodString;
            pictureUrl: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
