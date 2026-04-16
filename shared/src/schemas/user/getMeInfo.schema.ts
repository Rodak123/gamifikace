import {
  BaseRequestSchema,
  SuccessResponseSchemaWithData,
} from '../baseEndpont.schema';
import { UserSchema } from './user.schema';
import { z } from 'zod';

export const GetMeInfoRequestSchema = BaseRequestSchema;

export const GetMeInfoResponseSchema = SuccessResponseSchemaWithData(
  z.object({
    user: UserSchema,
  }),
);
