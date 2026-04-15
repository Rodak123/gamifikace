import {
  BaseRequestSchema,
  SuccessResponseSchema,
} from '../baseEndpont.schema';
import { z } from 'zod';

export const LogoutRequestSchema = BaseRequestSchema.extend({});

export const LogoutResponseSchema = SuccessResponseSchema(
  z.object({
    loggedOut: z.literal(true),
  }),
);

type LogoutRequest = z.infer<typeof LogoutRequestSchema>;

export type LogoutBody = LogoutRequest['body'];
export type LogoutParams = LogoutRequest['params'];
export type LogoutQuery = LogoutRequest['query'];

export type LogoutResponse = z.infer<typeof LogoutResponseSchema>;
