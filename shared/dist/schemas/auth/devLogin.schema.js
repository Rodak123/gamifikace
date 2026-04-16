import { BaseRequestSchema, SuccessResponseSchemaWithData, } from '../baseEndpont.schema';
import { z } from 'zod';
import { UserSchema } from '../user/user.schema';
export const DevLoginRequestSchema = BaseRequestSchema.extend({});
export const DevLoginResponseSchema = SuccessResponseSchemaWithData(z.object({
    user: UserSchema,
}));
