import { BaseRequestSchema, SuccessResponseSchemaWithData, } from '../baseEndpont.schema';
import { z } from 'zod';
import { ScoreboardSchema } from './scoreboard.schema';
export const GetScoreboardRequestSchema = BaseRequestSchema;
export const GetScoreboardResponseSchema = SuccessResponseSchemaWithData(z.object({
    scoreboard: ScoreboardSchema,
}));
