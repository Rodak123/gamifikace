import {
  BaseRequestSchema,
  SuccessResponseSchemaWithData,
} from '../baseEndpont.schema';
import { UserSchema } from './user.schema';
import { z } from 'zod';

export const GetUserInfoRequestSchema = BaseRequestSchema.extend({});

export const GetUserInfoResponseSchema = SuccessResponseSchemaWithData(
  z.object({
    user: UserSchema,
  }),
);
