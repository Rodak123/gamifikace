import type { Achievement } from '@gamifikace/shared';
import { Typography } from './Typography';

interface AchievementDisplayProps {
  achievement: Achievement;
}

export const AchievementDisplay: React.FC<AchievementDisplayProps> = ({
  achievement,
}) => {
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
    </div>
  );
};
