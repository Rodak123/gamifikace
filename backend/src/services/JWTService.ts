import jwt from 'jsonwebtoken';
import { env } from '../config/env';
import { User, UserSchema } from '@gamifikace/shared';
import z from 'zod';

const JWTPayloadSchema = UserSchema.pick({
  id: true,
  email: true,
});

type JWTPayload = z.infer<typeof JWTPayloadSchema>;

export class JWTService {
  public sign(user: User) {
    const payload: JWTPayload = {
      id: user.id,
      email: user.email,
    };
    const token = jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: '7d',
    });

    return token;
  }

  public verify(token: string) {
    try {
      const payload = jwt.verify(token, env.JWT_SECRET);
      if (!payload || typeof payload !== 'object') {
        return null;
      }
      return JWTPayloadSchema.parse(payload);
    } catch {
      return null;
    }
  }
}
