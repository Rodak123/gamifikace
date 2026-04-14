import {
  BaseRequestSchema,
  SuccessResponseSchema,
} from '../baseEndpont.schema';
import { z } from 'zod';

export const HealthRequestSchema = BaseRequestSchema;

export const HealthResponseSchema = SuccessResponseSchema(
  z.object({
    database: z.boolean(),
  }),
);

type HealthRequest = z.infer<typeof HealthRequestSchema>;

export type HealthBody = HealthRequest['body'];
export type HealthParams = HealthRequest['params'];
export type HealthQuery = HealthRequest['query'];

export type HealthResponse = z.infer<typeof HealthResponseSchema>;
