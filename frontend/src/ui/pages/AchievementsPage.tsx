import { useQuery } from '@tanstack/react-query';
import { Typography } from '../components/Typography';
import { DefaultLayout } from './layouts/DefaultLayout';
import { ENDPOINTS } from '@gamifikace/shared';
import { apiClient } from '../../middleware';
import { LoadingPage } from './LoadingPage';
import { AchievementDisplay } from '../components/AchievementDisplay';

export const AchievementsPage: React.FC = () => {
  const achievementsQuery = useQuery({
    queryKey: ['achievements'],
    queryFn: () =>
      apiClient.request(ENDPOINTS.ACHIEVEMENT.GET_ALL, {
        body: {},
        params: {},
      }),
  });

  if (!achievementsQuery.isSuccess) {
    return <LoadingPage />;
  }

  return (
    <DefaultLayout>
      <Typography variant='h1' size='5xl' className='text-center'>
        Achievements
      </Typography>
      <div className='flex flex-col gap-4'>
        {achievementsQuery.data.achievements.map((achievement) => {
          return (
            <AchievementDisplay
              key={achievement.key}
              achievement={achievement}
            />
          );
        })}
      </div>
    </DefaultLayout>
  );
};
