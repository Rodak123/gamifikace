import { BaseRequestSchema, SuccessResponseSchemaWithData, } from '../baseEndpont.schema';
import { UserSchema } from './user.schema';
import { z } from 'zod';
export const GetOneUserRequestSchema = BaseRequestSchema.extend({
    params: z.object({ id: UserSchema.shape.id }),
});
export const GetOneUserResponseSchema = SuccessResponseSchemaWithData(z.object({
    user: UserSchema.omit({ email: true }),
}));
