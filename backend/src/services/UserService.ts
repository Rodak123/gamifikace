import { Role, User } from '@gamifikace/shared';
import { PrismaClient } from '../generated/prisma/client.js';

export class UserService {
  private readonly db: PrismaClient;

  constructor(db: PrismaClient) {
    this.db = db;
  }

  public async createUser(
    nickname: string,
    firstName: string,
    lastName: string,
    email: string,
    role?: Role
  ): Promise<User> {
    return await this.db.user.create({
      data: {
        nickname,
        firstName,
        lastName,
        email,
        role,
      },
    });
  }

  public async findOrCreateUser(
    email: string,
    nickname: string,
    firstName: string,
    lastName: string,
    role?: Role
  ): Promise<User> {
    const user = await this.db.user.findFirst({
      where: { email },
    });

    if (user !== null) return user;

    return await this.createUser(nickname, firstName, lastName, email, role);
  }

  public async getUser(id: string): Promise<User | null> {
    return await this.db.user.findFirst({
      where: { id },
    });
  }

  public async getAllUsers(): Promise<User[]> {
    return await this.db.user.findMany();
  }
}
