import { z } from 'zod';
export declare const HealthRequestSchema: z.ZodObject<{
    body: z.ZodObject<{}, z.core.$strip>;
    params: z.ZodObject<{}, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>;
export declare const HealthResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: z.ZodObject<{
        database: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
