import { z } from 'zod';

const envSchema = z.object({
  VITE_NODE_ENV: z.enum(['development', 'production']).default('development'),
  VITE_API_PATH: z.string(),
});

const { success, error, data } = envSchema.safeParse(import.meta.env);

if (!success) {
  console.error('Invalid environment variables:', error);
  throw new Error('Failed to load ENV');
}

export const env = data;
