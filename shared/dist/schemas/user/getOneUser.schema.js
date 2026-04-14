import { BaseRequestSchema, SuccessResponseSchema, } from '../baseEndpont.schema';
import { UserSchema } from './user.schema';
export const GetOneUserRequestSchema = BaseRequestSchema.extend({
    params: UserSchema.pick({ id: true }),
});
export const GetOneUserResponseSchema = SuccessResponseSchema(UserSchema);
