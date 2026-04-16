import {
  BaseRequestSchema,
  SuccessResponseSchemaWithData,
} from '../baseEndpont.schema';
import { z } from 'zod';

export const LogoutRequestSchema = BaseRequestSchema.extend({});

export const LogoutResponseSchema = SuccessResponseSchemaWithData(
  z.object({
    loggedOut: z.literal(true),
  }),
);
