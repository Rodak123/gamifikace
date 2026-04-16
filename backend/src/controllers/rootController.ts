import { ENDPOINTS } from '@gamifikace/shared';
import { checkDatabase } from '../config/db';
import { env } from '../config/env';
import { TypedRequestHandler } from '../utils/typedRequestHandler';

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

export const getHealthHandler: TypedRequestHandler<typeof ENDPOINTS.ROOT.HEALTH> = async () => {
  const dbHealthy = await getDBHealth();

  return {
    database: dbHealthy,
  };
};
