import { useLocation, Navigate, Outlet } from 'react-router';
import { useAuth } from '../libs/hooks/useAuth';
import { ROUTES } from '../routes';
import { ROLES, type Role } from '@gamifikace/shared';

interface ProtectedRouteProps {
  minRole?: Role;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  minRole = ROLES.USER,
}) => {
  const { authData } = useAuth();
  const location = useLocation();

  if (authData.isAuthenticated === false) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  if (!authData.hasAccess(minRole)) {
    return <Navigate to={ROUTES.LANDING} state={{ from: location }} replace />;
  }

  return <Outlet />;
};
