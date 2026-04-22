import { Link } from 'react-router';
import { ROUTES } from '../../../routes';
import { LogoutButton } from '../../components/LogoutButton';
import { useAuth } from '../../../libs/hooks/useAuth';
import { ROLES } from '@gamifikace/shared';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const { authData } = useAuth();

  return (
    <div className='w-screen min-h-screen flex flex-col'>
      <div className='flex gap-4 p-2 items-center'>
        <Link to={ROUTES.LANDING}>Home</Link>
        <Link to={ROUTES.ACHIEVEMENTS}>Achievements</Link>
        {!authData.isAuthenticated && <Link to={ROUTES.LOGIN}>Log in</Link>}
        {authData.hasAccess(ROLES.ADMIN) && (
          <Link to={ROUTES.ADMIN_HOME}>Admin Panel</Link>
        )}
        {authData.isAuthenticated && <LogoutButton />}
      </div>
      <div className='p-4 w-full grow flex flex-col'>{children}</div>
    </div>
  );
};
