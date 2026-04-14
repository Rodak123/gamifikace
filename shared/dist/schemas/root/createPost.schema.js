import { BaseRequestSchema, SuccessResponseSchema, } from '../baseEndpont.schema';
import { PostSchema } from './post.schema';
export const CreatePostRequestSchema = BaseRequestSchema.extend({
    body: PostSchema.omit({ id: true, createdAt: true }),
});
export const CreatePostResponseSchema = SuccessResponseSchema(PostSchema);
