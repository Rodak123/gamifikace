import { useQuery } from '@tanstack/react-query';
import { unwrapResponse } from './unwrapResponse';
import { achievementEndpoints } from '../endpoints';

export const useAllAchievements = () => {
  return useQuery({
    queryKey: ['achievements'],
    queryFn: () => unwrapResponse(achievementEndpoints.getAllAchievements()),
  });
};

export const useOneAchievement = (key: string) => {
  return useQuery({
    queryKey: ['achievement', key],
    queryFn: () => unwrapResponse(achievementEndpoints.getOneAchievement(key)),
  });
};
