import {
  BaseRequestSchema,
  SuccessResponseSchema,
} from '../baseEndpont.schema';
import { z } from 'zod';
import { UserSchema } from '../user/user.schema';

export const DevLoginRequestSchema = BaseRequestSchema.extend({});

export const DevLoginResponseSchema = SuccessResponseSchema(
  z.object({
    user: UserSchema,
  }),
);

type DevLoginRequest = z.infer<typeof DevLoginRequestSchema>;

export type DevLoginBody = DevLoginRequest['body'];
export type DevLoginParams = DevLoginRequest['params'];
export type DevLoginQuery = DevLoginRequest['query'];

export type DevLoginResponse = z.infer<typeof DevLoginResponseSchema>;
