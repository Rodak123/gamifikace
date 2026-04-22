import { Typography } from './Typography';

export const Preloader: React.FC = () => {
  return (
    <div className='w-full h-full d-flex items-center justify-center'>
      <Typography className='text-center'>Loading...</Typography>
    </div>
  );
};
