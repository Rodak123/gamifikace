import { z } from 'zod';
export declare const UserSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    nickname: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    createdAt: z.ZodDate;
    role: z.ZodEnum<{
        readonly USER: "USER";
        readonly ADMIN: "ADMIN";
        readonly SUPERADMIN: "SUPERADMIN";
    }>;
    pictureUrl: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type User = z.infer<typeof UserSchema>;
export declare const SharedUserSchema: z.ZodObject<{
    id: z.ZodString;
    nickname: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    pictureUrl: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SharedUser = z.infer<typeof SharedUserSchema>;
