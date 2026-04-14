import { PrismaClient } from '../generated/prisma/client.js';
import { EndpointError } from '../middleware/errorHandler.js';

export class AchievementService {
  constructor(private readonly db: PrismaClient) {}

  public async createAchievement(key: string, name: string, description: string, xp: number) {
    const otherAchievement = await this.db.achievement.findFirst({
      where: { key: key },
    });

    if (otherAchievement !== null) {
      throw new EndpointError(400, `Achievement with key: '${key}' already exists`);
    }

    return await this.db.achievement.create({
      data: {
        key,
        name,
        description,
        xp,
      },
    });
  }

  public async getOneAchievement(key: string) {
    return await this.db.achievement.findFirst({
      where: { key },
    });
  }

  public async getAllAchievements() {
    return await this.db.achievement.findMany();
  }
}
