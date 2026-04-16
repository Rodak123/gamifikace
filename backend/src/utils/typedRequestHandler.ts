import { NextFunction, Request, Response } from 'express';
import { BaseRequestSchemaType, Endpoint, SuccessRespoonseSchemaType } from '@gamifikace/shared';
import z from 'zod';
import { AuthenticatedRequest } from '../middleware/auth';

export type TypedRequestHandler<
  E extends Endpoint<BaseRequestSchemaType, SuccessRespoonseSchemaType, boolean>,
> = (
  req: E['auth']['isAuthenticated'] extends true
    ? AuthenticatedRequest<
        z.infer<E['requestSchema']> extends { params: infer P } ? P : Record<string, never>,
        z.infer<E['responseSchema']>,
        z.infer<E['requestSchema']> extends { body: infer B } ? B : Record<string, never>,
        z.infer<E['requestSchema']> extends { query: infer Q } ? Q : Record<string, never>
      >
    : Request<
        z.infer<E['requestSchema']> extends { params: infer P } ? P : Record<string, never>,
        z.infer<E['responseSchema']>,
        z.infer<E['requestSchema']> extends { body: infer B } ? B : Record<string, never>,
        z.infer<E['requestSchema']> extends { query: infer Q } ? Q : Record<string, never>
      >,
  res: Response<z.infer<E['responseSchema']>>,
  next: NextFunction
) => Promise<z.infer<E['responseSchema']>['data']> | z.infer<E['responseSchema']>['data'];
