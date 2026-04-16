import { env } from './config/env.js';
import { prisma, pool, checkDatabase } from './config/db.js';

import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { rateLimit } from 'express-rate-limit';

import { errorHandler } from './middleware/errorHandler.js';
import { achievementRoutes, rootRoutes } from './routes/index.js';
import { authRoutes } from './routes/authRoutes.js';
import { userRoutes } from './routes/userRoutes.js';
import { gameRoutes } from './routes/gameRoutes.js';

const app: Express = express();
const PORT = env.PORT;
const DEV_ENV = env.NODE_ENV === 'development';

// Security, Parsing, Rate limit
app.use(helmet());
app.use(cors({ origin: env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
});
app.use(limiter);

// Routes
app.use(rootRoutes);
app.use(gameRoutes);
app.use(authRoutes);
app.use(userRoutes);
app.use(achievementRoutes);

app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.use(errorHandler);

// Start
const startServer = async () => {
  try {
    if (DEV_ENV) {
      console.log('Development environment is enabled!');
    }

    await prisma.$connect();
    await checkDatabase();
    console.log('Successfully connected to the database.');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    await pool.end();
    process.exit(1);
  }
};

// End DB
process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  await pool.end();
  process.exit(0);
});

startServer();
