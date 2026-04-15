import { useMutation } from '@tanstack/react-query';
import { unwrapResponse } from './unwrapResponse';
import { authEndpoints } from '../endpoints';

export const useLogin = () => {
  return useMutation({
    mutationFn: (credential: string) =>
      unwrapResponse(
        authEndpoints.login({
          credential: credential,
        }),
      ),
  });
};

export const useLoginDev = () => {
  return useMutation({
    mutationFn: () => unwrapResponse(authEndpoints.loginDev()),
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: () => unwrapResponse(authEndpoints.logout()),
  });
};
