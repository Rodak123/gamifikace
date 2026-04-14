import 'dotenv/config';
import { defineConfig } from '@prisma/config';
import process from 'node:process';

const { DB_USER, DB_PASSWORD, DB_NAME, DB_DOCKER_PORT } = process.env;

const dbUrl = `postgresql://${DB_USER}:${DB_PASSWORD}@localhost:${DB_DOCKER_PORT}/${DB_NAME}?schema=public`;

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    url: dbUrl,
  },
});
