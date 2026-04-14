import { PrismaClient } from '../generated/prisma/client.js';

export class UserService {
  constructor(private readonly db: PrismaClient) {}

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

  public async getUser(id: string) {
    return await this.db.user.findFirst({
      where: { id },
    });
  }
}
