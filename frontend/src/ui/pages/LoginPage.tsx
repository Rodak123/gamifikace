import { useAuth } from '../../libs/hooks/useAuth';
import { Button } from '../components/Button';
import { Typography } from '../components/Typography';
import { DefaultLayout } from './layouts/DefaultLayout';

export const LoginPage: React.FC = () => {
  const { login, user } = useAuth();

  const handleLogin = () => {
    login();
  };

  return (
    <DefaultLayout>
      <Typography variant='h1' size='5xl' className='text-center'>
        Login
      </Typography>
      <Button
        className='justify-center'
        variant='primary'
        size='md'
        onClick={handleLogin}
      >
        Sign In with Google
      </Button>
      {user !== null && (
        <Typography>
          {user.email} {user.nickname}
        </Typography>
      )}
    </DefaultLayout>
  );
};
