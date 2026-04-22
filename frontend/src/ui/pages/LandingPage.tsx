import { Typography } from '../components/Typography';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Scoreboard } from '../components/Scoreboard';

export const LandingPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Typography variant='h1' size='5xl' className='text-center'>
        Scoreboard
      </Typography>
      <Scoreboard />
    </DefaultLayout>
  );
};
