import { createBrowserRouter } from 'react-router';

import { MainPage } from './ui/pages/MainPage';
import { ErrorPage } from './ui/pages/ErrorPage';
import { AchievementsPage } from './ui/pages/AchievementsPage';
import { ScoreboardPage } from './ui/pages/ScoreboardPage';
import { LoginPage } from './ui/pages/LoginPage';
import { ProtectedRoute } from './middleware/ProtectedRoute';
import { ROUTES } from './routes';

export const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    ErrorBoundary: ErrorPage,
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: ROUTES.HOME,
        ErrorBoundary: ErrorPage,
        element: <MainPage />,
      },
      {
        path: ROUTES.ACHIEVEMENTS,
        ErrorBoundary: ErrorPage,
        element: <AchievementsPage />,
      },
      {
        path: ROUTES.SCOREBOARD,
        ErrorBoundary: ErrorPage,
        element: <ScoreboardPage />,
      },
    ],
  },
]);
