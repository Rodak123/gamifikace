/// <reference types="node" />
import 'dotenv/config'; // because prisma runs this script itself
import { defineConfig } from '@prisma/config';

const { DB_USER, DB_PASSWORD, DB_NAME, DB_DOCKER_PORT } = process.env;

const dbUrl = `postgresql://${DB_USER}:${DB_PASSWORD}@localhost:${DB_DOCKER_PORT}/${DB_NAME}?schema=public`;

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    url: dbUrl,
  },
});
