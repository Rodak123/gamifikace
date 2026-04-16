import z from 'zod';

export const AUTH_COOKIE_NAME = 'token';

export const AuthCookiesSchema = z.object({
  [AUTH_COOKIE_NAME]: z.string().optional(),
});
