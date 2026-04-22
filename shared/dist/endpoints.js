import { CreateAchievementRequestSchema, CreateAchievementResponseSchema, DevLoginRequestSchema, DevLoginResponseSchema, GetAllAchievementsRequestSchema, GetAllAchievementsResponseSchema, GetOneAchievementRequestSchema, GetOneAchievementResponseSchema, GetMeInfoRequestSchema, GetMeInfoResponseSchema, HealthRequestSchema, HealthResponseSchema, LoginRequestSchema, LoginResponseSchema, LogoutRequestSchema, LogoutResponseSchema, EarnAchievementRequestSchema, EarnAchievementResponseSchema, GetScoreboardRequestSchema, GetScoreboardResponseSchema, RevokeAchievementRequestSchema, RevokeAchievementResponseSchema, GetOneUserRequestSchema, GetOneUserResponseSchema, GetAllUsersRequestSchema, GetAllUsersResponseSchema, GetMineAchievementsRequestSchema, GetMineAchievementsResponseSchema, HasAchievementResponseSchema, HasAchievementRequestSchema, } from './schemas';
import { ROLES } from './types';
const createEndpoint = (endpoint) => endpoint;
const createAuthenticatedEndpoint = (endpoint) => endpoint;
const ROUTES = {
    ROOT: '',
    USER: '/user',
    ACHIEVEMENT: '/achievement',
    AUTH: '/auth',
    GAME: '/game',
};
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
        HAS_ACHIEVEMENT: createAuthenticatedEndpoint({
            path: `${ROUTES.ACHIEVEMENT}/hasAchievement`,
            requestSchema: HasAchievementRequestSchema,
            responseSchema: HasAchievementResponseSchema,
            method: 'post',
            auth: { isAuthenticated: true, minRole: ROLES.ADMIN },
        }),
        GRANT: createEndpoint({
            path: `${ROUTES.ACHIEVEMENT}/grant`,
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
        GET_MINE: createAuthenticatedEndpoint({
            path: `${ROUTES.ACHIEVEMENT}/mine`,
            requestSchema: GetMineAchievementsRequestSchema,
            responseSchema: GetMineAchievementsResponseSchema,
            method: 'post',
            auth: { isAuthenticated: true, minRole: ROLES.USER },
        }),
    },
    USER: {
        ME: createAuthenticatedEndpoint({
            path: `${ROUTES.USER}/me`,
            requestSchema: GetMeInfoRequestSchema,
            responseSchema: GetMeInfoResponseSchema,
            method: 'post',
            auth: { isAuthenticated: true, minRole: ROLES.USER },
        }),
        GET_ONE: createEndpoint({
            path: `${ROUTES.USER}/:id`,
            requestSchema: GetOneUserRequestSchema,
            responseSchema: GetOneUserResponseSchema,
            method: 'post',
            auth: { isAuthenticated: false },
        }),
        GET_ALL: createAuthenticatedEndpoint({
            path: `${ROUTES.USER}/all`,
            requestSchema: GetAllUsersRequestSchema,
            responseSchema: GetAllUsersResponseSchema,
            method: 'post',
            auth: { isAuthenticated: true, minRole: ROLES.ADMIN },
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
        LOGOUT: createAuthenticatedEndpoint({
            path: `${ROUTES.AUTH}/logout`,
            requestSchema: LogoutRequestSchema,
            responseSchema: LogoutResponseSchema,
            method: 'post',
            auth: { isAuthenticated: true, minRole: ROLES.USER },
        }),
    },
};
