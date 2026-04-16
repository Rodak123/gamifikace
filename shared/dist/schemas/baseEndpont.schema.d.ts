import { z, ZodObject, ZodType } from 'zod';
export declare const BaseRequestSchema: z.ZodObject<{
    body: z.ZodObject<{}, z.core.$strip>;
    params: z.ZodObject<{}, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>;
export type BaseRequestSchemaType = ZodObject<{
    body: ZodType;
    params: ZodType;
    query: ZodType;
}>;
export declare const SuccessResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: z.ZodAny;
}, z.core.$strip>;
export type SuccessRespoonseSchemaType = ZodObject<{
    success: z.ZodLiteral<true>;
    data: ZodType;
}>;
export type SuccessResponse = z.infer<typeof SuccessResponseSchema>;
export declare const SuccessResponseSchemaWithData: <T extends ZodType>(dataSchema: T) => z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: T;
}, z.core.$strip>;
export declare const ErrorResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<false>;
    message: z.ZodString;
    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>>>;
    stack: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ApiResponse<T> = {
    success: true;
    data: T;
} | {
    success: false;
    message: string;
    errors?: {
        field: string;
        message: string;
    }[];
    stack?: string;
};
