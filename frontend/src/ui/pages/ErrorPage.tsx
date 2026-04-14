import { isRouteErrorResponse, useRouteError } from 'react-router';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Typography } from '../components/Typography';
import { Button } from '../components/Button';
import { Link } from 'react-router';

export const ErrorPage: React.FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <DefaultLayout>
        <Typography variant='h1' size='5xl' className='text'>
          {error.status}
        </Typography>
        <Typography variant='h2' size='3xl'>
          {error.statusText}
        </Typography>
        <Typography>{error.data}</Typography>
        <Link to='/'>
          <Button className='w-full'>Home</Button>
        </Link>
      </DefaultLayout>
    );
  }

  if (error instanceof Error) {
    return (
      <DefaultLayout>
        <Typography variant='h1' size='5xl' className='text-center'>
          Error :(
        </Typography>
        <Typography>{error.message}</Typography>
        <Typography>The stack trace is:</Typography>
        <pre className='whitespace-pre-wrap wrap-break-word overflow-x-hidden bg-(--background-100) p-2 rounded'>
          {error.stack}
        </pre>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <Typography variant='h1' size='5xl' className='text-center'>
        Unknown Error :O
      </Typography>
    </DefaultLayout>
  );
};
