import { useCallback, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import type { AuthData } from '../types/auth';
import type { User } from '@gamifikace/shared';
import { env } from '../../config';
import { useLogin, useLoginDev, useLogout } from '../../middleware/hooks/auth';
import { type TokenResponse, useGoogleLogin } from '@react-oauth/google';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>({
    isAuthenticated: false,
  });

  const [user, setUser] = useState<User | null>(null);

  const loginMutation = useLogin();
  const loginDevMutation = useLoginDev();
  const logoutMutation = useLogout();

  const usedGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse: TokenResponse) => {
      try {
        const data = await loginMutation.mutateAsync(
          tokenResponse.access_token,
        );
        setUser(data?.user);
        setAuthData({ ...authData, isAuthenticated: true });
      } catch (error) {
        console.error('Failed to login with backend', error);
      }
    },
    onError: () => {
      console.error('Failed to login with Google');
    },
  });

  const login = useCallback(async () => {
    if (env.VITE_NODE_ENV === 'development') {
      try {
        const data = await loginDevMutation.mutateAsync();
        setUser(data?.user);
        setAuthData({ ...authData, isAuthenticated: true });
      } catch (error) {
        console.error('Dev login failed', error);
      }
    } else {
      usedGoogleLogin();
    }
  }, [loginDevMutation, usedGoogleLogin, authData]);

  const logout = useCallback(async () => {
    try {
      await logoutMutation.mutateAsync();
      setAuthData({ ...authData, isAuthenticated: false });
      setUser(null);
    } catch (error) {
      console.error('Logout failed', error);
    }
  }, [logoutMutation, authData]);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        user,
        authData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
