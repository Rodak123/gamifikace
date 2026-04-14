import { z } from 'zod';
export declare const UserSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    nickname: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    createdAt: z.ZodDate;
}, z.core.$strip>;
export type User = z.infer<typeof UserSchema>;
