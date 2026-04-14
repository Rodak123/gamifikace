import { BaseRequestSchema, SuccessResponseSchema, } from '../baseEndpont.schema';
import { PostSchema } from './post.schema';
export const GetOnePostRequestSchema = BaseRequestSchema.extend({
    params: PostSchema.pick({ id: true }),
});
export const GetOnePostResponseSchema = SuccessResponseSchema(PostSchema);
