import { BaseRequestSchema, SuccessResponseSchema, } from '../baseEndpont.schema';
import { z } from 'zod';
export const HealthRequestSchema = BaseRequestSchema;
export const HealthResponseSchema = SuccessResponseSchema(z.object({
    database: z.boolean(),
}));
