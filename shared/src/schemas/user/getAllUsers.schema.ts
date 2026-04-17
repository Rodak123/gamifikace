import {
  BaseRequestSchema,
  SuccessResponseSchemaWithData,
} from '../baseEndpont.schema';
import { UserSchema } from './user.schema';
import { z } from 'zod';

export const GetAllUsersRequestSchema = BaseRequestSchema;

export const GetAllUsersResponseSchema = SuccessResponseSchemaWithData(
  z.object({
    users: z.array(UserSchema.omit({ email: true })),
  }),
);
