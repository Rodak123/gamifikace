import { useQuery } from '@tanstack/react-query';
import { unwrapResponse } from './unwrapResponse';
import { getAllAchievements, getOneAchievement } from '../endpoints';

export const useAllAchievements = () => {
  return useQuery({
    queryKey: ['achievements'],
    queryFn: () => unwrapResponse(getAllAchievements()),
  });
};

export const useOneAchievement = (key: string) => {
  return useQuery({
    queryKey: ['achievement', key],
    queryFn: () => unwrapResponse(getOneAchievement(key)),
  });
};
