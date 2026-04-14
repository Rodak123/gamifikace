import { PrismaClient } from '../src/generated/prisma/client.js';
import { mockDeep, DeepMockProxy } from 'vitest-mock-extended';

export type MockContext = {
  prisma: DeepMockProxy<PrismaClient>;
};

export const createMockContext = (): MockContext => {
  return {
    prisma: mockDeep<PrismaClient>(),
  };
};
