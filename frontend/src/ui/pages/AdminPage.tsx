import { ENDPOINTS } from '@gamifikace/shared';
import { DefaultLayout } from './layouts/DefaultLayout';
import { UserAchievementTable } from '../components/UserAchievementTable';
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../middleware';
import { LoadingPage } from './LoadingPage';

export const AdminPage: React.FC = () => {
  const usersQuery = useQuery({
    queryKey: ['users'],
    queryFn: () =>
      apiClient.request(ENDPOINTS.USER.GET_ALL, {
        body: {},
        params: {},
      }),
  });

  const achievementsQuery = useQuery({
    queryKey: ['achievements'],
    queryFn: () =>
      apiClient.request(ENDPOINTS.ACHIEVEMENT.GET_ALL, {
        body: {},
        params: {},
      }),
  });

  if (!achievementsQuery.isSuccess || !usersQuery.isSuccess) {
    return <LoadingPage />;
  }

  const users = usersQuery.data.users;
  const achievements = achievementsQuery.data.achievements;

  return (
    <DefaultLayout>
      <UserAchievementTable achievements={achievements} users={users} />
    </DefaultLayout>
  );
};
