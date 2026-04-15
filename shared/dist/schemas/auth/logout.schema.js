import { BaseRequestSchema, SuccessResponseSchema, } from '../baseEndpont.schema';
import { z } from 'zod';
export const LogoutRequestSchema = BaseRequestSchema.extend({});
export const LogoutResponseSchema = SuccessResponseSchema(z.object({
    loggedOut: z.literal(true),
}));
