import { useQuery } from '@tanstack/react-query';
import { unwrapResponse } from './unwrapResponse';
import { userEndpoints } from '../endpoints';

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => unwrapResponse(userEndpoints.getUserInfo()),
  });
};
