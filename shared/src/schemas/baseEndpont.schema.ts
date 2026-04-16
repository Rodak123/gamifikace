import { z, ZodObject, ZodType } from 'zod';

export const BaseRequestSchema = z.object({
  body: z.object(),
  params: z.object(),
  query: z.object(),
});

export type BaseRequestSchemaType = ZodObject<{
  body: ZodType;
  params: ZodType;
  query: ZodType;
}>;

export const SuccessResponseSchema = z.object({
  success: z.literal(true),
  data: z.any(),
});

export type SuccessRespoonseSchemaType = ZodObject<{
  success: z.ZodLiteral<true>;
  data: ZodType;
}>;

export type SuccessResponse = z.infer<typeof SuccessResponseSchema>;

export const SuccessResponseSchemaWithData = <T extends ZodType>(
  dataSchema: T,
) => {
  return SuccessResponseSchema.extend({
    data: dataSchema,
  });
};

export const ErrorResponseSchema = z.object({
  success: z.literal(false),
  message: z.string(),
  errors: z
    .array(
      z.object({
        field: z.string(),
        message: z.string(),
      }),
    )
    .optional(),
  stack: z.string().optional(),
});

export type ApiResponse<T> =
  | { success: true; data: T }
  | {
      success: false;
      message: string;
      errors?: { field: string; message: string }[];
      stack?: string;
    };
