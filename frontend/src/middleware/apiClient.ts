import axios, { AxiosError, type AxiosInstance } from 'axios';
import { API_PATH } from './apiPath';
import { z } from 'zod';
import {
  ErrorResponseSchema,
  type ApiResponse,
  type BaseRequestSchemaType,
  type Endpoint,
  type SuccessRespoonseSchemaType,
} from '@gamifikace/shared';
import { env } from '../config';

type ApiErrorResponse = z.infer<typeof ErrorResponseSchema>;

const baseURL = API_PATH;

class ApiClient {
  private _axiosInstance: AxiosInstance;

  public constructor() {
    this._axiosInstance = axios.create({
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

    this._axiosInstance.interceptors.response.use(
      (response) => response,
      (error: AxiosError<ApiErrorResponse>) => {
        const serverError = error.response?.data;

        if (serverError) {
          logError(
            `API Error [${error.response?.status}]: ${serverError.message}`,
          );

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
  }

  private replaceParams(path: string, params: Record<string, string>) {
    let parsedPath = path;
    for (const key in params) {
      if (!Object.hasOwn(params, key)) continue;
      parsedPath = parsedPath.replaceAll(`:${key}`, params[key]);
    }
    return parsedPath;
  }

  public async request<
    TReq extends BaseRequestSchemaType,
    TRes extends SuccessRespoonseSchemaType,
    TInferredReq = z.infer<TReq>,
    TInferredRes = z.infer<TRes>,
  >(
    endpoint: Endpoint<TReq, TRes, boolean>,
    data: {
      params: TInferredReq extends { params: infer P } ? P : never;
      body: TInferredReq extends { body: infer B } ? B : never;
    },
  ): Promise<TInferredRes extends { data: infer U } ? U : TInferredRes> {
    let path = endpoint.path;

    if (data?.params) {
      path = this.replaceParams(path, data.params as Record<string, string>);
    }

    const response = await this._axiosInstance.request<TInferredRes>({
      url: path,
      method: endpoint.method,
      data: data?.body,
    });

    const responseData = response.data as unknown as ApiResponse<
      TInferredRes extends { data: infer U } ? U : TInferredRes
    >;

    if (
      !responseData ||
      typeof responseData !== 'object' ||
      !('success' in responseData)
    ) {
      throw new Error('API invalid response');
    }

    if (!responseData.success) {
      throw new Error(responseData.message || 'API request failed');
    }

    return (
      responseData?.data !== undefined ? responseData.data : responseData
    ) as TInferredRes extends { data: infer U } ? U : TInferredRes;
  }
}

export const apiClient = new ApiClient();

// const responseA = await apiClient.request(ENDPOINTS.AUTH.LOGIN, {
//   body: {
//     credential: 'test-credential',
//   },
//   params: {},
// });
// console.log(responseA.user);
