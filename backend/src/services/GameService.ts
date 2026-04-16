import { Scoreboard } from '@gamifikace/shared';
import { PrismaClient } from '../generated/prisma/client.js';

export class GameService {
  private readonly db: PrismaClient;

  constructor(db: PrismaClient) {
    this.db = db;
  }

  public async getScoreboard(): Promise<Scoreboard> {
    const logs = await this.db.userAchievementLog.findMany({
      include: { achievement: true, user: true },
    });

    const userMap: Record<string, Scoreboard[number]> = {};

    for (const log of logs) {
      const userId = log.userId;

      const entry: Scoreboard[number] = userMap[userId] ?? {
        logs: [],
        totalXp: 0,
        user: log.user,
      };

      entry.totalXp += log.achievement.xp;
      entry.logs.push(log);

      userMap[userId] = entry;
    }

    return [...Object.values(userMap)].toSorted((a, b) => b.totalXp - a.totalXp);
  }
}
