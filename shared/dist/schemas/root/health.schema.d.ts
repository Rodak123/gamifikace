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
type HealthRequest = z.infer<typeof HealthRequestSchema>;
export type HealthBody = HealthRequest['body'];
export type HealthParams = HealthRequest['params'];
export type HealthQuery = HealthRequest['query'];
export type HealthResponse = z.infer<typeof HealthResponseSchema>;
export {};
