/**
 * seed migration to setup the DB
 */

import { Achievement } from '@gamifikace/shared';
import { prisma } from './db';

const achievements: Omit<Achievement, 'createdAt'>[] = [
  { key: 'react-1', name: 'React I', description: 'Use React to create a small app.', xp: 100 },
  { key: 'react-2', name: 'React II', description: 'Use React with a UI library.', xp: 200 },
  {
    key: 'react-3',
    name: 'React III',
    description: 'Use React for a multi page application.',
    xp: 200,
  },
  { key: 'react-4', name: 'React IV', description: 'Use React together with an API.', xp: 400 },
  { key: 'express-1', name: 'Express I', description: 'Use Express for a small API.', xp: 100 },
  {
    key: 'express-2',
    name: 'Express II',
    description: 'Use Express and Zod for validation.',
    xp: 200,
  },
  {
    key: 'express-3',
    name: 'Express III',
    description: 'Use Express and JWT to add middleware.',
    xp: 200,
  },
];

const main = async () => {
  for (const achievement of achievements) {
    const created = await prisma.achievement.upsert({
      where: { key: achievement.key },
      update: {},
      create: achievement,
    });

    console.log(`Ensured achievement: ${created.key}`);
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
    process.exit(0);
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
