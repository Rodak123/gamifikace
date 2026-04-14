import { z } from 'zod';
export declare const PostSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    content: z.ZodString;
    createdAt: z.ZodDate;
}, z.core.$strip>;
export type Post = z.infer<typeof PostSchema>;
