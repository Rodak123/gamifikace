import {
  BaseRequestSchemaType,
  CreateAchievementRequestSchema,
  CreateAchievementResponseSchema,
  DevLoginRequestSchema,
  DevLoginResponseSchema,
  GetAllAchievementsRequestSchema,
  GetAllAchievementsResponseSchema,
  GetOneAchievementRequestSchema,
  GetOneAchievementResponseSchema,
  GetMeInfoRequestSchema,
  GetMeInfoResponseSchema,
  HealthRequestSchema,
  HealthResponseSchema,
  LoginRequestSchema,
  LoginResponseSchema,
  LogoutRequestSchema,
  LogoutResponseSchema,
  SuccessRespoonseSchemaType,
  EarnAchievementRequestSchema,
  EarnAchievementResponseSchema,
  GetScoreboardRequestSchema,
  GetScoreboardResponseSchema,
  RevokeAchievementRequestSchema,
  RevokeAchievementResponseSchema,
  GetOneUserRequestSchema,
  GetOneUserResponseSchema,
  GetAllUsersRequestSchema,
  GetAllUsersResponseSchema,
  GetMineAchievementsRequestSchema,
  GetMineAchievementsResponseSchema,
} from './schemas';
import { Endpoint } from './types/endpoint';

const createEndpoint = <
  TReq extends BaseRequestSchemaType,
  TRes extends SuccessRespoonseSchemaType,
  TIsAuth extends boolean = false,
>(
  endpoint: Endpoint<TReq, TRes, TIsAuth>,
): Endpoint<TReq, TRes, TIsAuth> => endpoint;

const ROUTES = {
  ROOT: '',
  USER: '/user',
  ACHIEVEMENT: '/achievement',
  AUTH: '/auth',
  GAME: '/game',
} as const;

export const ENDPOINTS = {
  ROOT: {
    HEALTH: createEndpoint({
      path: `${ROUTES.ROOT}/health`,
      requestSchema: HealthRequestSchema,
      responseSchema: HealthResponseSchema,
      method: 'get',
      auth: { isAuthenticated: false },
    }),
  },
  GAME: {
    GET_SCOREBOARD: createEndpoint({
      path: `${ROUTES.GAME}/scoreboard`,
      requestSchema: GetScoreboardRequestSchema,
      responseSchema: GetScoreboardResponseSchema,
      method: 'post',
      auth: { isAuthenticated: false },
    }),
  },
  ACHIEVEMENT: {
    GET_ALL: createEndpoint({
      path: `${ROUTES.ACHIEVEMENT}/all`,
      requestSchema: GetAllAchievementsRequestSchema,
      responseSchema: GetAllAchievementsResponseSchema,
      method: 'post',
      auth: { isAuthenticated: false },
    }),
    CREATE: createEndpoint({
      path: `${ROUTES.ACHIEVEMENT}/create`,
      requestSchema: CreateAchievementRequestSchema,
      responseSchema: CreateAchievementResponseSchema,
      method: 'post',
      auth: { isAuthenticated: false },
    }),
    GET_ONE: createEndpoint({
      path: `${ROUTES.ACHIEVEMENT}/:key`,
      requestSchema: GetOneAchievementRequestSchema,
      responseSchema: GetOneAchievementResponseSchema,
      method: 'post',
      auth: { isAuthenticated: false },
    }),
    EARN: createEndpoint({
      path: `${ROUTES.ACHIEVEMENT}/earn`,
      requestSchema: EarnAchievementRequestSchema,
      responseSchema: EarnAchievementResponseSchema,
      method: 'post',
      auth: { isAuthenticated: false },
    }),
    REVOKE: createEndpoint({
      path: `${ROUTES.ACHIEVEMENT}/revoke`,
      requestSchema: RevokeAchievementRequestSchema,
      responseSchema: RevokeAchievementResponseSchema,
      method: 'post',
      auth: { isAuthenticated: false },
    }),
    GET_MINE: createEndpoint({
      path: `${ROUTES.ACHIEVEMENT}/mine`,
      requestSchema: GetMineAchievementsRequestSchema,
      responseSchema: GetMineAchievementsResponseSchema,
      method: 'post',
      auth: { isAuthenticated: true },
    }),
  },
  USER: {
    ME: createEndpoint({
      path: `${ROUTES.USER}/me`,
      requestSchema: GetMeInfoRequestSchema,
      responseSchema: GetMeInfoResponseSchema,
      method: 'post',
      auth: { isAuthenticated: true },
    }),
    GET_ONE: createEndpoint({
      path: `${ROUTES.USER}/:id`,
      requestSchema: GetOneUserRequestSchema,
      responseSchema: GetOneUserResponseSchema,
      method: 'post',
      auth: { isAuthenticated: false },
    }),
    GET_ALL: createEndpoint({
      path: `${ROUTES.USER}/all`,
      requestSchema: GetAllUsersRequestSchema,
      responseSchema: GetAllUsersResponseSchema,
      method: 'post',
      auth: { isAuthenticated: true },
    }),
  },
  AUTH: {
    LOGIN: createEndpoint({
      path: `${ROUTES.AUTH}/login`,
      requestSchema: LoginRequestSchema,
      responseSchema: LoginResponseSchema,
      method: 'post',
      auth: { isAuthenticated: false },
    }),
    LOGIN_DEV: createEndpoint({
      path: `${ROUTES.AUTH}/loginDev`,
      requestSchema: DevLoginRequestSchema,
      responseSchema: DevLoginResponseSchema,
      method: 'post',
      auth: { isAuthenticated: false },
    }),
    LOGOUT: createEndpoint({
      path: `${ROUTES.AUTH}/logout`,
      requestSchema: LogoutRequestSchema,
      responseSchema: LogoutResponseSchema,
      method: 'post',
      auth: { isAuthenticated: true },
    }),
  },
} as const;
