import { Link } from 'react-router';
import { ROUTES } from '../../../routes';
import { LogoutButton } from '../../components/LogoutButton';
import { useAuth } from '../../../libs/hooks/useAuth';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const { authData } = useAuth();

  return (
    <div className='w-screen min-h-screen flex flex-col'>
      <div className='flex gap-4 p-2 items-center'>
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.ACHIEVEMENTS}>Achievements</Link>
        <Link to={ROUTES.SCOREBOARD}>Scoreboard</Link>
        {authData.isAuthenticated && <LogoutButton />}
      </div>
      <div className='p-4 w-full grow flex flex-col'>{children}</div>
    </div>
  );
};
