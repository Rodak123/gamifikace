import { Typography } from '../components/Typography';
import { DefaultLayout } from './layouts/DefaultLayout';

export const ScoreboardPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Typography variant='h1' size='5xl' className='text-center'>
        Scoreboard
      </Typography>
    </DefaultLayout>
  );
};
