import { PrismaClient } from '../generated/prisma/client.js';
import { EndpointError } from '../middleware/endpointError.js';

export class AchievementService {
  private readonly db: PrismaClient;

  constructor(db: PrismaClient) {
    this.db = db;
  }

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

  public async earnAchievement(userId: string, key: string) {
    const user = await this.db.user.findFirst({ where: { id: userId } });

    if (user === null) {
      throw new EndpointError(400, `User with id: '${userId}' doesn't exist`);
    }

    const achievement = await this.db.achievement.findFirst({
      where: { key: key },
    });

    if (achievement === null) {
      throw new EndpointError(400, `Achievement with key: '${key}' doesn't exist`);
    }

    const isAlreadyEarned =
      (await this.db.userAchievementLog.findFirst({
        where: { achievementKey: key, userId: userId },
      })) !== null;

    if (isAlreadyEarned) {
      throw new EndpointError(400, `User already has an achievement with key: '${key}'`);
    }

    return await this.db.userAchievementLog.create({
      data: {
        achievementKey: achievement.key,
        userId: user.id,
      },
    });
  }

  public async revokeAchievement(userId: string, key: string) {
    const user = await this.db.user.findFirst({ where: { id: userId } });

    if (user === null) {
      throw new EndpointError(400, `User with id: '${userId}' doesn't exist`);
    }

    const achievement = await this.db.achievement.findFirst({
      where: { key: key },
    });

    if (achievement === null) {
      throw new EndpointError(400, `Achievement with key: '${key}' doesn't exist`);
    }

    const achievementLog = await this.db.userAchievementLog.findFirst({
      where: { achievementKey: key, userId: userId },
    });

    if (achievementLog === null) {
      throw new EndpointError(400, `User doesn't have an achievement with key: '${key}'`);
    }

    await this.db.userAchievementLog.delete({
      where: {
        userId_achievementKey: {
          userId: userId,
          achievementKey: key,
        },
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

  public async getAllAchievementsOfUser(userId: string) {
    return await this.db.achievement.findMany({
      where: { users: { some: { userId: userId } } },
    });
  }

  public async hasAchievement(userId: string, achievementKey: string) {
    return (
      (
        await this.db.achievement.findMany({
          where: { key: achievementKey, users: { some: { userId: userId } } },
        })
      ).length > 0
    );
  }
}
