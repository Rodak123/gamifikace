import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../../libs/hooks/useAuth';
import { LoginButton } from '../components/LoginButton';
import { Typography } from '../components/Typography';
import { DefaultLayout } from './layouts/DefaultLayout';
import { ROUTES } from '../../routes';

export const LoginPage: React.FC = () => {
  const { authData } = useAuth();
  const location = useLocation();

  if (authData.isAuthenticated) {
    const origin = location.state?.from?.pathname || ROUTES.LANDING;
    return <Navigate to={origin} replace />;
  }

  return (
    <DefaultLayout>
      <div className='w-full grow flex justify-center items-center'>
        <div className='flex flex-col gap-4 p-4 border border-primary rounded-2xl'>
          <Typography variant='h1' size='6xl' className='text-center'>
            Login
          </Typography>
          <LoginButton />
        </div>
      </div>
    </DefaultLayout>
  );
};
