import { BaseRequestSchema, SuccessResponseSchema, } from '../baseEndpont.schema';
import { UserSchema } from './user.schema';
import { z } from 'zod';
export const GetUserInfoRequestSchema = BaseRequestSchema.extend({});
export const GetUserInfoResponseSchema = SuccessResponseSchema(z.object({
    user: UserSchema,
}));
