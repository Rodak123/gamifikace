import { useCallback, useMemo } from 'react';
import { AuthContext } from '../context/AuthContext';
import type { AuthData } from '../types/auth';
import { ENDPOINTS, type User } from '@gamifikace/shared';
import { env } from '../../config';
import { type TokenResponse, useGoogleLogin } from '@react-oauth/google';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../../middleware';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const queryClient = useQueryClient();

  const userQuery = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      apiClient.request(ENDPOINTS.USER.ME, { body: {}, params: {} }),
    retry: false,
  });

  const authData: AuthData = useMemo(
    () => ({
      isAuthenticated: userQuery.isSuccess && !!userQuery.data,
    }),
    [userQuery.isSuccess, userQuery.data],
  );

  const loggedUser = (userQuery.data?.user as User) || null;

  const loginMutation = useMutation({
    mutationKey: ['login'],
    mutationFn: (credential: string) =>
      apiClient.request(ENDPOINTS.AUTH.LOGIN, {
        body: { credential },
        params: {},
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  const loginDevMutation = useMutation({
    mutationKey: ['loginDev'],
    mutationFn: () =>
      apiClient.request(ENDPOINTS.AUTH.LOGIN_DEV, {
        body: {},
        params: {},
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  const logoutMutation = useMutation({
    mutationKey: ['logout'],
    mutationFn: () =>
      apiClient.request(ENDPOINTS.AUTH.LOGOUT, {
        body: {},
        params: {},
      }),
    onSuccess: () => {
      queryClient.setQueryData(['user'], null);
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  const usedGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse: TokenResponse) => {
      loginMutation.mutate(tokenResponse.access_token);
    },
    onError: () => {
      console.error('Failed to login with Google');
    },
  });

  const login = useCallback(async () => {
    if (env.VITE_NODE_ENV === 'development') {
      loginDevMutation.mutate();
    } else {
      usedGoogleLogin();
    }
  }, [usedGoogleLogin, loginDevMutation]);

  const logout = useCallback(async () => {
    logoutMutation.mutate();
  }, [logoutMutation]);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        loggedUser,
        authData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
