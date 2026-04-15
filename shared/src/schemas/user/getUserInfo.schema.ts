import {
  BaseRequestSchema,
  SuccessResponseSchema,
} from '../baseEndpont.schema';
import { UserSchema } from './user.schema';
import { z } from 'zod';

export const GetUserInfoRequestSchema = BaseRequestSchema.extend({});

export const GetUserInfoResponseSchema = SuccessResponseSchema(
  z.object({
    user: UserSchema,
  }),
);

type GetUserInfoRequest = z.infer<typeof GetUserInfoRequestSchema>;

export type GetUserInfoBody = GetUserInfoRequest['body'];
export type GetUserInfoParams = GetUserInfoRequest['params'];
export type GetUserInfoQuery = GetUserInfoRequest['query'];

export type GetUserInfoResponse = z.infer<typeof GetUserInfoResponseSchema>;
