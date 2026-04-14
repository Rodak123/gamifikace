import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('production'),
  PORT: z.coerce.number().int().positive().min(1),
  CLIENT_URL: z.string(),

  DB_DOCKER_PORT: z.coerce.number().int().positive().min(1),
  DB_USER: z.string().min(1),
  DB_PASSWORD: z.string().min(1),
  DB_NAME: z.string().min(1),
});

const { success, error, data } = envSchema.safeParse(process.env);

if (!success) {
  console.error('Invalid environment variables:', error);
  process.exit(1);
}

export const env = data;
