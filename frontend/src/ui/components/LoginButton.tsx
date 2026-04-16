import { useAuth } from '../../libs/hooks/useAuth';
import { Button } from './Button';

export const LoginButton: React.FC = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    login();
  };

  return (
    <Button
      className='justify-center'
      variant='primary'
      size='lg'
      onClick={handleLogin}
    >
      Sign In with Google
    </Button>
  );
};
