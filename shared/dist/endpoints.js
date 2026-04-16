import { CreateAchievementRequestSchema, CreateAchievementResponseSchema, DevLoginRequestSchema, DevLoginResponseSchema, GetAllAchievementsRequestSchema, GetAllAchievementsResponseSchema, GetOneAchievementRequestSchema, GetOneAchievementResponseSchema, GetMeInfoRequestSchema, GetMeInfoResponseSchema, HealthRequestSchema, HealthResponseSchema, LoginRequestSchema, LoginResponseSchema, LogoutRequestSchema, LogoutResponseSchema, } from './schemas';
const createEndpoint = (endpoint) => endpoint;
const ROUTES = {
    ROOT: '',
    USER: '/user',
    ACHIEVEMENT: '/achievement',
    AUTH: '/auth',
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
            requestSchema: GetOneAchievementRequestSchema,
            responseSchema: GetOneAchievementResponseSchema,
            method: 'post',
            auth: { isAuthenticated: false },
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
};
