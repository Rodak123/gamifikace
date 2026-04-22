import { z } from 'zod';

const envSchema = z.object({
  VITE_NODE_ENV: z.enum(['development', 'production']).default('development'),
  VITE_API_PATH: z.string(),

  VITE_GOOGLE_CLIENT_ID: z.string().min(1),
  VITE_USE_GOOGLE_AUTH: z.coerce.number().transform((val) => val === 1),
});

const { success, error, data } = envSchema.safeParse(import.meta.env);

if (!success) {
  console.error('Invalid environment variables:', error);
  throw new Error('Failed to load ENV');
}

export const env = data;
