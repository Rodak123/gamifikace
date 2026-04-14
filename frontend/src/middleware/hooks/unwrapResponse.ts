import type { ApiResponse } from '@gamifikace/shared';

/**
 * Unwraps the ApiResponse and throws an error for tanstack/react-querry
 */
export async function unwrapResponse<T>(
  promise: Promise<ApiResponse<T>>,
): Promise<T> {
  const response = await promise;
  if (!response.success) {
    throw new Error(response.message || 'API Request Failed');
  }
  return response.data;
}
