import { z } from 'zod';
export const BaseRequestSchema = z.object({
    body: z.any().optional(),
    params: z.any().optional(),
    query: z.any().optional(),
});
export const SuccessResponseSchema = (dataSchema) => z.object({
    success: z.literal(true),
    data: dataSchema,
});
export const ErrorResponseSchema = z.object({
    success: z.literal(false),
    message: z.string(),
    errors: z
        .array(z.object({
        field: z.string(),
        message: z.string(),
    }))
        .optional(),
    stack: z.string().optional(),
});
