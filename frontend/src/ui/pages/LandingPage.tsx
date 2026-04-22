import { useQuery } from '@tanstack/react-query';
import { Typography } from '../components/Typography';
import { DefaultLayout } from './layouts/DefaultLayout';
import { apiClient } from '../../middleware';
import { ENDPOINTS } from '@gamifikace/shared';
import { LoadingPage } from './LoadingPage';
import { ScoreDisplay } from '../components/ScoreDisplay';

export const LandingPage: React.FC = () => {
  const scoreboardQuery = useQuery({
    queryKey: ['scoreboard'],
    queryFn: () =>
      apiClient.request(ENDPOINTS.GAME.GET_SCOREBOARD, {
        body: {},
        params: {},
      }),
  });

  if (!scoreboardQuery.isSuccess) {
    return <LoadingPage />;
  }

  return (
    <DefaultLayout>
      <Typography variant='h1' size='5xl' className='text-center'>
        Scoreboard
      </Typography>
      {scoreboardQuery.data.scoreboard.map((entry) => {
        return <ScoreDisplay key={entry.user.id} score={entry} />;
      })}
    </DefaultLayout>
  );
};
