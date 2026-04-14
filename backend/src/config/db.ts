import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import { env } from './env.js';

const { DB_USER, DB_PASSWORD, DB_NAME, DB_DOCKER_PORT } = env;

const dbUrl = `postgresql://${DB_USER}:${DB_PASSWORD}@localhost:${DB_DOCKER_PORT}/${DB_NAME}?schema=public`;

export const pool = new pg.Pool({
  connectionString: dbUrl,
  max: 20,
  idleTimeoutMillis: 30000,
});

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });

export const checkDatabase = async () => {
  await prisma.user.count();
};
