import { z } from 'zod';
export declare const LogoutRequestSchema: z.ZodObject<{
    body: z.ZodObject<{}, z.core.$strip>;
    params: z.ZodObject<{}, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>;
export declare const LogoutResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: z.ZodObject<{
        loggedOut: z.ZodLiteral<true>;
    }, z.core.$strip>;
}, z.core.$strip>;
