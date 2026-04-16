import { useLocation, Navigate, Outlet } from 'react-router';
import { useAuth } from '../libs/hooks/useAuth';
import { ROUTES } from '../routes';

export const ProtectedRoute = () => {
  const { authData } = useAuth();
  const location = useLocation();

  if (authData.isAuthenticated === false) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return <Outlet />;
};
