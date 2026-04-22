import { ENDPOINTS } from '@gamifikace/shared';
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../middleware';
import { ScoreDisplay } from './ScoreDisplay';
import { Preloader } from './Preloader';

export const Scoreboard = () => {
  const scoreboardQuery = useQuery({
    queryKey: ['scoreboard'],
    queryFn: () =>
      apiClient.request(ENDPOINTS.GAME.GET_SCOREBOARD, {
        body: {},
        params: {},
      }),
  });

  if (!scoreboardQuery.isSuccess) {
    return <Preloader />;
  }

  return (
    <div className='flex flex-col gap-4'>
      {scoreboardQuery.data.scoreboard.map((entry) => {
        return <ScoreDisplay key={entry.user.id} score={entry} />;
      })}
    </div>
  );
};
