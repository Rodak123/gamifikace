import { apiClient } from '../config';
import {
  ENDPOINTS,
  type CreateAchievementBody,
  type CreateAchievementResponse,
  type GetAllAchievementsResponse,
  type GetOneAchievementResponse,
} from '@gamifikace/shared';

export const getAllAchievements =
  async (): Promise<GetAllAchievementsResponse> => {
    const response = await apiClient.post<GetAllAchievementsResponse>(
      ENDPOINTS.ACHIEVEMENT.GET_ALL(),
    );

    return response.data;
  };

export const getOneAchievement = async (
  key: string,
): Promise<GetOneAchievementResponse> => {
  const response = await apiClient.post<GetOneAchievementResponse>(
    ENDPOINTS.ACHIEVEMENT.GET_ONE(key),
  );

  return response.data;
};

export const createAchievement = async (
  data: CreateAchievementBody,
): Promise<CreateAchievementResponse> => {
  const response = await apiClient.post<CreateAchievementResponse>(
    ENDPOINTS.ACHIEVEMENT.CREATE(),
    data,
  );

  return response.data;
};
