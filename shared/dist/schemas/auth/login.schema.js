import { BaseRequestSchema, SuccessResponseSchema, } from '../baseEndpont.schema';
import { z } from 'zod';
import { UserSchema } from '../user/user.schema';
export const LoginRequestSchema = BaseRequestSchema.extend({
    body: z.object({
        credential: z.string().min(1),
    }),
});
export const LoginResponseSchema = SuccessResponseSchema(z.object({
    user: UserSchema,
}));
