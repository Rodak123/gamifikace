import { BaseRequestSchema, SuccessResponseSchemaWithData, } from '../baseEndpont.schema';
import { z } from 'zod';
import { UserSchema } from '../user/user.schema';
export const GetScoreboardRequestSchema = BaseRequestSchema;
;
export const GetScoreboardResponseSchema = SuccessResponseSchemaWithData(z.object({
    user: UserSchema,
}));
