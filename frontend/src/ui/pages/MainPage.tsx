import { ENDPOINTS } from '@gamifikace/shared';
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../middleware';
import { Typography } from '../components/Typography';
import { DefaultLayout } from './layouts/DefaultLayout';
import { LoadingPage } from './LoadingPage';
import { AchievementManage } from '../components/AchievementManage';

export const MainPage: React.FC = () => {
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
      <Typography variant='h1' size='5xl'>
        Gamifikace
      </Typography>
      {achievementsQuery.data.achievements.map((achievement) => {
        return (
          <AchievementManage key={achievement.key} achievement={achievement} />
        );
      })}
    </DefaultLayout>
  );
};
