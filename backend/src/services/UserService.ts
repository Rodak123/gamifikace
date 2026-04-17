import { PrismaClient } from '../generated/prisma/client.js';

export class UserService {
  private readonly db: PrismaClient;

  constructor(db: PrismaClient) {
    this.db = db;
  }

  public async createUser(nickname: string, firstName: string, lastName: string, email: string) {
    return await this.db.user.create({
      data: {
        nickname,
        firstName,
        lastName,
        email,
      },
    });
  }

  public async findOrCreateUser(
    email: string,
    nickname: string,
    firstName: string,
    lastName: string
  ) {
    const user = await this.db.user.findFirst({
      where: { email },
    });

    if (user !== null) return user;

    return await this.db.user.create({
      data: {
        nickname,
        firstName,
        lastName,
        email,
      },
    });
  }

  public async getUser(id: string) {
    return await this.db.user.findFirst({
      where: { id },
    });
  }

  public async getAllUsers() {
    return await this.db.user.findMany();
  }
}
