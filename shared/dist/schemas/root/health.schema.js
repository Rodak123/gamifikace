import { BaseRequestSchema, SuccessResponseSchemaWithData, } from '../baseEndpont.schema';
import { z } from 'zod';
export const HealthRequestSchema = BaseRequestSchema;
export const HealthResponseSchema = SuccessResponseSchemaWithData(z.object({
    database: z.boolean(),
}));
