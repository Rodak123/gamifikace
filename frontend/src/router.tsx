import { createBrowserRouter } from 'react-router';

import { MainPage } from './ui/pages/MainPage';
import { ErrorPage } from './ui/pages/ErrorPage';
import { AchievementsPage } from './ui/pages/AchievementsPage';
import { ScoreboardPage } from './ui/pages/ScoreboardPage';
import { LoginPage } from './ui/pages/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    ErrorBoundary: ErrorPage,
    element: <MainPage />,
  },
  {
    path: '/achievements',
    ErrorBoundary: ErrorPage,
    element: <AchievementsPage />,
  },
  {
    path: '/scoreboard',
    ErrorBoundary: ErrorPage,
    element: <ScoreboardPage />,
  },
  {
    path: '/login',
    ErrorBoundary: ErrorPage,
    element: <LoginPage />,
  },
]);
