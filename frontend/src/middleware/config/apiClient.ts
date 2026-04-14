import axios, { AxiosError } from 'axios';
import { API_PATH } from './apiPath';
import { z } from 'zod';
import { ErrorResponseSchema } from '@gamifikace/shared';
import { env } from '../../config';

type ApiErrorResponse = z.infer<typeof ErrorResponseSchema>;

const baseURL = API_PATH;

export const apiClient = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const logError = (...data: string[]) => {
  if (env.VITE_NODE_ENV !== 'development') return;
  console.error(...data);
};

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorResponse>) => {
    const serverError = error.response?.data;

    if (serverError) {
      logError(`API Error [${error.response?.status}]: ${serverError.message}`);

      if (serverError.errors) {
        serverError.errors.forEach((err) => {
          logError(`Validation failed on ${err.field}: ${err.message}`);
        });
      }
    } else if (error.request) {
      logError('Network error. No response received from server.');
    } else {
      logError('Request setup error:', error.message);
    }

    return Promise.reject(serverError || error);
  },
);
