import { z } from 'zod';
import { ROLES } from '../../types';

export const UserSchema = z.object({
  id: z.string().min(1),
  email: z.string().min(5),
  nickname: z.string().min(1),
  firstName: z.string(),
  lastName: z.string(),
  createdAt: z.date(),
  role: z.enum(ROLES),
});

export type User = z.infer<typeof UserSchema>;

export const SharedUserSchema = UserSchema.omit({
  email: true,
  role: true,
  createdAt: true,
});

export type SharedUser = z.infer<typeof SharedUserSchema>;
