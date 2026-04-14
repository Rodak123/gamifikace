import { BaseRequestSchema, SuccessResponseSchema, } from '../baseEndpont.schema';
import { PostSchema } from './post.schema';
import { z } from 'zod';
export const GetAllPostsRequestSchema = BaseRequestSchema.extend({});
export const GetAllPostsResponseSchema = SuccessResponseSchema(z.array(PostSchema.pick({ id: true })));
