const ROUTES = {
    ROOT: '',
    USER: '/user',
    ACHIEVEMENT: '/achievement',
    AUTH: '/auth',
};
export const ENDPOINTS = {
    ROOT: {
        HEALTH: () => `${ROUTES.ROOT}/health`,
    },
    ACHIEVEMENT: {
        GET_ALL: () => `${ROUTES.ACHIEVEMENT}/all`,
        CREATE: () => `${ROUTES.ACHIEVEMENT}/create`,
        GET_ONE: (key) => `${ROUTES.ACHIEVEMENT}/${key}`,
    },
    USER: {
        INFO: () => `${ROUTES.USER}/info`,
    },
    AUTH: {
        LOGIN: () => `${ROUTES.AUTH}/login`,
        LOGIN_DEV: () => `${ROUTES.AUTH}/loginDev`,
        LOGOUT: () => `${ROUTES.AUTH}/logout`,
    },
};
