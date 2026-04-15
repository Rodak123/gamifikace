import { Typography } from '../components/Typography';
import { DefaultLayout } from './layouts/DefaultLayout';
import { useAllAchievements } from '../../middleware/hooks';
import { LoadingPage } from './LoadingPage';

export const AchievementsPage: React.FC = () => {
  const { data, isSuccess, isLoading } = useAllAchievements();

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <DefaultLayout>
      <Typography variant='h1' size='5xl' className='text-center'>
        Achievements
      </Typography>
      {isSuccess &&
        data.achievements.map((achievement) => (
          <Typography key={achievement.key}>
            {achievement.xp}XP {achievement.name} - {achievement.description}
          </Typography>
        ))}
    </DefaultLayout>
  );
};
