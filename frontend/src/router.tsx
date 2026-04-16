import {
  createBrowserRouter,
  Navigate,
  Outlet,
  useLocation,
} from 'react-router';

import { MainPage } from './ui/pages/MainPage';
import { ErrorPage } from './ui/pages/ErrorPage';
import { AchievementsPage } from './ui/pages/AchievementsPage';
import { ScoreboardPage } from './ui/pages/ScoreboardPage';
import { LoginPage } from './ui/pages/LoginPage';
import { useAuth } from './libs/hooks/useAuth';

const ProtectedRoute = () => {
  const { authData } = useAuth();
  const location = useLocation();

  if (authData.isAuthenticated === false) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export const ROUTES = {
  LOGIN: '/login',
  HOME: '/',
  ACHIEVEMENTS: '/achievements',
  SCOREBOARD: '/scoreboard',
} as const;

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
