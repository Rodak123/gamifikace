import {
  BaseRequestSchema,
  SuccessResponseSchema,
} from '../baseEndpont.schema';
import { z } from 'zod';
import { UserSchema } from '../user/user.schema';

export const LoginRequestSchema = BaseRequestSchema.extend({
  body: z.object({
    credential: z.string().min(1),
  }),
});

export const LoginResponseSchema = SuccessResponseSchema(
  z.object({
    user: UserSchema,
  }),
);

type LoginRequest = z.infer<typeof LoginRequestSchema>;

export type LoginBody = LoginRequest['body'];
export type LoginParams = LoginRequest['params'];
export type LoginQuery = LoginRequest['query'];

export type LoginResponse = z.infer<typeof LoginResponseSchema>;
