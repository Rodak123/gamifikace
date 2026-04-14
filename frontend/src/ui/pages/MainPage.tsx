import { Typography } from '../components/Typography';
import { DefaultLayout } from './layouts/DefaultLayout';
import { useAllAchievements } from '../../middleware/hooks';
import { LoadingPage } from './LoadingPage';

export const MainPage: React.FC = () => {
  const { data, isSuccess, isLoading } = useAllAchievements();

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <DefaultLayout>
      <Typography variant='h1' size='5xl'>
        Gamifikace
      </Typography>
      {isSuccess &&
        data.map((achievement) => (
          <Typography key={achievement.key}>
            {achievement.xp}XP {achievement.name} - {achievement.description}
          </Typography>
        ))}
    </DefaultLayout>
  );
};
