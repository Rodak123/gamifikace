import { BaseRequestSchema, SuccessResponseSchema, } from '../baseEndpont.schema';
import { z } from 'zod';
import { UserSchema } from '../user/user.schema';
export const DevLoginRequestSchema = BaseRequestSchema.extend({});
export const DevLoginResponseSchema = SuccessResponseSchema(z.object({
    user: UserSchema,
}));
