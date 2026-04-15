import { createContext } from 'react';
import type { User } from '@gamifikace/shared';
import type { AuthData } from '../types/auth';

interface AuthContextType {
  user: User | null;
  authData: AuthData;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);
