import { ENDPOINTS, type Scoreboard } from '@gamifikace/shared';
import { Typography } from './Typography';
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../middleware';

interface ScoreDisplayProps {
  score: Scoreboard[number];
}

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score }) => {
  const userQuery = useQuery({
    queryKey: ['user', score.user.id],
    queryFn: () =>
      apiClient.request(ENDPOINTS.USER.GET_ONE, {
        body: {},
        params: { id: score.user.id },
      }),
  });

  return (
    <div className='p-2 w-full flex flex-col gap-2 border rounded border-primary'>
      <div className='w-full flex gap-2 items-end'>
        <Typography size='xl' className='text-primary'>
          {score.totalXp} XP
        </Typography>
        <Typography size='2xl' className='font-bold'>
          {userQuery.isSuccess ? userQuery.data.user.nickname : 'Loading...'}
        </Typography>
      </div>
      <Typography>Achievements unlocked: {score.logs.length}</Typography>
    </div>
  );
};
