import { z } from 'zod';
export const UserSchema = z.object({
    id: z.string().min(1),
    email: z.string().min(5),
    nickname: z.string().min(1),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    createdAt: z.date(),
});
