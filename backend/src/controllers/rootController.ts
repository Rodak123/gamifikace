import {
  HealthParams,
  HealthResponse,
  HealthBody,
  HealthQuery,
  HealthResponseSchema,
} from '@gamifikace/shared';
import { RequestHandler } from 'express';
import { respondWith } from '../utils/respondWith';
import { checkDatabase } from '../config/db';
import { env } from '../config/env';

const getDBHealth = async () => {
  try {
    await checkDatabase();
    return true;
  } catch (error) {
    if (env.NODE_ENV === 'development') {
      console.log(error);
    }
    return false;
  }
};

export const getHealthHandler: RequestHandler<
  HealthParams,
  HealthResponse,
  HealthBody,
  HealthQuery
> = async (_req, res) => {
  const dbHealthy = await getDBHealth();

  respondWith(res, 200, HealthResponseSchema, {
    database: dbHealthy,
  });
};
