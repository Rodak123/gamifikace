import { describe, it, expect, beforeEach } from 'vitest';
import { UserService } from '../src/services/UserService.js';
import { createMockContext, MockContext } from './mockDb.js';
import { PrismaClient } from '../src/generated/prisma/client.js';

describe('UserService', () => {
  let mockCtx: MockContext;
  let userService: UserService;

  beforeEach(() => {
    mockCtx = createMockContext();
    userService = new UserService(mockCtx.prisma as unknown as PrismaClient);
  });

  it('should create a new user successfully', async () => {
    const fakeUser = {
      id: 'user-123',
      email: 'john@example.com',
      nickname: 'john_doe',
      firstName: 'John',
      lastName: 'Doe',
      createdAt: new Date(),
    };

    mockCtx.prisma.user.create.mockResolvedValue(fakeUser);

    const result = await userService.createUser('john_doe', 'John', 'Doe', 'john@example.com');

    expect(mockCtx.prisma.user.create).toHaveBeenCalledOnce();
    expect(mockCtx.prisma.user.create).toHaveBeenCalledWith({
      data: {
        email: 'john@example.com',
        nickname: 'john_doe',
        firstName: 'John',
        lastName: 'Doe',
      },
    });

    expect(result).toEqual(fakeUser);
  });

  it('should get a user successfully', async () => {
    const fakeUser = {
      id: 'user-123',
      email: 'john@example.com',
      nickname: 'john_doe',
      firstName: 'John',
      lastName: 'Doe',
      createdAt: new Date(),
    };

    mockCtx.prisma.user.findFirst.mockResolvedValue(fakeUser);

    const result = await userService.getUser('user-123');

    expect(mockCtx.prisma.user.findFirst).toHaveBeenCalledOnce();
    expect(mockCtx.prisma.user.findFirst).toHaveBeenCalledWith({
      where: { id: 'user-123' },
    });

    expect(result).toEqual(fakeUser);
  });
});
