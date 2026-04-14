import { Typography } from '../components/Typography';

export const LoadingPage: React.FC = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Typography variant='h1' size='5xl' className='text-center'>
        Loading...
      </Typography>
    </div>
  );
};
