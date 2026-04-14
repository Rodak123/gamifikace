import { Response } from 'express';
import { z } from 'zod';

export const respondWith = <T, S extends z.ZodType<{ success: true; data: T }>>(
  res: Response,
  statusCode: 200 | 201,
  schema: S,
  data: T
) => {
  const safeResponse = schema.parse({
    success: true,
    data,
  });

  res.status(statusCode).json(safeResponse);
};
