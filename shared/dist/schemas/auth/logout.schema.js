import { BaseRequestSchema, SuccessResponseSchemaWithData, } from '../baseEndpont.schema';
import { z } from 'zod';
export const LogoutRequestSchema = BaseRequestSchema;
export const LogoutResponseSchema = SuccessResponseSchemaWithData(z.object({
    loggedOut: z.literal(true),
}));
