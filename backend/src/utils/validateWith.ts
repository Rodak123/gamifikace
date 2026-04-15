import { Request, Response, NextFunction } from 'express';
import { ZodObject } from 'zod';

/**
 * Validates request to match the zod schema
 */
export const validateWith = (schema: ZodObject) => {
  return async (req: Request, _res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      next(error);
    }
  };
};
