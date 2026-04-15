import { apiClient } from '../config';
import { ENDPOINTS, type GetUserInfoResponse } from '@gamifikace/shared';

export const userEndpoints = {
  getUserInfo: async (): Promise<GetUserInfoResponse> => {
    const response = await apiClient.post<GetUserInfoResponse>(
      ENDPOINTS.USER.INFO(),
    );

    return response.data;
  },
};
