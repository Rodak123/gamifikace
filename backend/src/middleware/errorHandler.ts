import { Request, Response, NextFunction } from 'express';
import { env } from '../config/env.js';
import { ZodError } from 'zod';
import { ErrorResponseSchema } from '@gamifikace/shared';
import { EndpointError } from './endpointError.js';

type ErrorType = Error & { statusCode?: number };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (err: ErrorType, _req: Request, res: Response, _next: NextFunction) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';
  let errors: { field: string; message: string }[] | undefined = undefined;

  if (err instanceof ZodError) {
    statusCode = 400;
    message = 'Invalid request data';
    errors = err.issues.map((issue) => ({
      field: issue.path.join('.'),
      message: issue.message,
    }));
  } else if (err instanceof EndpointError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  const safeResponse = ErrorResponseSchema.parse({
    success: false,
    message,
    ...(errors && { errors }),
    ...(env.NODE_ENV === 'development' && { stack: err.stack }),
  });

  res.status(statusCode).json(safeResponse);
};
