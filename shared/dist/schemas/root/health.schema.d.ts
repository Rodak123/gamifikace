import { z } from 'zod';
export declare const HealthRequestSchema: z.ZodObject<{
    body: z.ZodOptional<z.ZodAny>;
    params: z.ZodOptional<z.ZodAny>;
    query: z.ZodOptional<z.ZodAny>;
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
