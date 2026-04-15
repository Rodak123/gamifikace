import { Response } from 'express';
import { z } from 'zod';

/**
 * Valiadtes data using the schema and responds with the data and status code
 */
export const respondWith = <S extends z.ZodType<{ success: true; data: object }>>(
  res: Response,
  statusCode: 200 | 201,
  schema: S,
  data: z.infer<S>['data']
) => {
  const safeResponse = schema.parse({
    success: true,
    data,
  });

  res.status(statusCode).json(safeResponse);
};
