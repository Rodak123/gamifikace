import { createBrowserRouter } from 'react-router';

import { ErrorPage } from './ui/pages/ErrorPage';
import { AchievementsPage } from './ui/pages/AchievementsPage';
import { LandingPage } from './ui/pages/LandingPage';
import { LoginPage } from './ui/pages/LoginPage';
import { ProtectedRoute } from './middleware/ProtectedRoute';
import { ROUTES } from './routes';
import { AdminPage } from './ui/pages/AdminPage';
import { ROLES } from '@gamifikace/shared';

export const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    ErrorBoundary: ErrorPage,
    element: <LoginPage />,
  },
  {
    path: ROUTES.LANDING,
    ErrorBoundary: ErrorPage,
    element: <LandingPage />,
  },
  {
    path: ROUTES.ACHIEVEMENTS,
    ErrorBoundary: ErrorPage,
    element: <AchievementsPage />,
  },
  {
    element: <ProtectedRoute minRole={ROLES.ADMIN} />,
    children: [
      {
        path: ROUTES.ADMIN_HOME,
        ErrorBoundary: ErrorPage,
        element: <AdminPage />,
      },
    ],
  },
]);
