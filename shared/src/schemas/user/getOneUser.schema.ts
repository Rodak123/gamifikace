import {
  BaseRequestSchema,
  SuccessResponseSchema,
} from '../baseEndpont.schema';
import { UserSchema } from './user.schema';
import { z } from 'zod';

export const GetOneUserRequestSchema = BaseRequestSchema.extend({
  params: UserSchema.pick({ id: true }),
});

export const GetOneUserResponseSchema = SuccessResponseSchema(UserSchema);

type GetOneUserRequest = z.infer<typeof GetOneUserRequestSchema>;

export type GetOneUserBody = GetOneUserRequest['body'];
export type GetOneUserParams = GetOneUserRequest['params'];
export type GetOneUserQuery = GetOneUserRequest['query'];

export type GetOneUserResponse = z.infer<typeof GetOneUserResponseSchema>;
