import { apiClient } from '../config';
import {
  ENDPOINTS,
  type DevLoginResponse,
  type LoginBody,
  type LoginResponse,
  type LogoutResponse,
} from '@gamifikace/shared';

export const authEndpoints = {
  login: async (body: LoginBody): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>(
      ENDPOINTS.AUTH.LOGIN(),
      body,
    );

    return response.data;
  },
  loginDev: async (): Promise<DevLoginResponse> => {
    const response = await apiClient.post<DevLoginResponse>(
      ENDPOINTS.AUTH.LOGIN_DEV(),
    );

    return response.data;
  },
  logout: async (): Promise<LogoutResponse> => {
    const response = await apiClient.post<LogoutResponse>(
      ENDPOINTS.AUTH.LOGOUT(),
    );

    return response.data;
  },
} as const;
