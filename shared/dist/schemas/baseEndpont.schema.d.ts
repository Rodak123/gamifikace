import { z } from 'zod';
export declare const BaseRequestSchema: z.ZodObject<{
    body: z.ZodOptional<z.ZodAny>;
    params: z.ZodOptional<z.ZodAny>;
    query: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export declare const SuccessResponseSchema: <T extends z.ZodTypeAny>(dataSchema: T) => z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: T;
}, z.core.$strip>;
export declare const ErrorResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<false>;
    message: z.ZodString;
    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>>>;
    stack: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
