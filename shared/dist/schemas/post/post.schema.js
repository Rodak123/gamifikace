import { z } from 'zod';
export const PostSchema = z.object({
    id: z.string(),
    title: z.string().min(1).max(255),
    content: z.string().min(1),
    createdAt: z.date(),
});
