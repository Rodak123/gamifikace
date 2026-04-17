import { ENDPOINTS, type Achievement } from '@gamifikace/shared';
import { Typography } from './Typography';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../../middleware';
import { Button } from './Button';
import { useAuth } from '../../libs/hooks/useAuth';

interface AchievementManageProps {
  achievement: Achievement;
}

export const AchievementManage: React.FC<AchievementManageProps> = ({
  achievement,
}) => {
  const queryClient = useQueryClient();
  const { loggedUser } = useAuth();

  const earnAchievementMutation = useMutation({
    mutationKey: ['earnAchievement'],
    mutationFn: (userId: string) =>
      apiClient.request(ENDPOINTS.ACHIEVEMENT.EARN, {
        body: { user: { id: userId }, achievement: { key: achievement.key } },
        params: {},
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mineAchievements'] });
      queryClient.invalidateQueries({ queryKey: ['scoreboard'] });
    },
  });

  const revokeAchievementMutation = useMutation({
    mutationKey: ['revokeAchievement'],
    mutationFn: (userId: string) =>
      apiClient.request(ENDPOINTS.ACHIEVEMENT.REVOKE, {
        body: { user: { id: userId }, achievement: { key: achievement.key } },
        params: {},
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mineAchievements'] });
      queryClient.invalidateQueries({ queryKey: ['scoreboard'] });
    },
  });

  const mineAchievementsQuery = useQuery({
    queryKey: ['mineAchievements'],
    queryFn: () =>
      apiClient.request(ENDPOINTS.ACHIEVEMENT.GET_MINE, {
        body: {},
        params: {},
      }),
  });

  const handleEarnAchievement = () => {
    if (loggedUser === null) return;
    earnAchievementMutation.mutate(loggedUser.id);
  };

  const handleRevokeAchievement = () => {
    if (loggedUser === null) return;
    revokeAchievementMutation.mutate(loggedUser.id);
  };

  return (
    <div className='p-2 w-full flex flex-col gap-2 border rounded border-primary'>
      <div className='w-full flex gap-2 items-end'>
        <Typography size='xl' className='text-primary'>
          {achievement.xp} XP
        </Typography>
        <Typography size='2xl' className='font-bold'>
          {achievement.name}
        </Typography>
      </div>
      <Typography>{achievement.description}</Typography>
      <div className='flex flex-row gap-2'>
        {mineAchievementsQuery.isSuccess ? (
          mineAchievementsQuery.data.achievements.findIndex(
            (mineAchievement) => mineAchievement.key === achievement.key,
          ) === -1 ? (
            <Button onClick={handleEarnAchievement}>Earn Achievement</Button>
          ) : (
            <Button onClick={handleRevokeAchievement}>
              Revoke Achievement
            </Button>
          )
        ) : (
          'Loading...'
        )}
      </div>
    </div>
  );
};
