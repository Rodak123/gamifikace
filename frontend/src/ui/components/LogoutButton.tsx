import { useNavigate } from 'react-router';
import { useAuth } from '../../libs/hooks/useAuth';
import { Button } from './Button';
import { ROUTES } from '../../router';

export const LogoutButton: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN, { replace: true });
  };

  return (
    <Button
      className='justify-center'
      variant='primary'
      size='md'
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};
