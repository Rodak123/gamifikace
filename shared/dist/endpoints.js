const ROUTES = {
    ROOT: '',
    USER: '/user',
    ACHIEVEMENT: '/achievement',
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
        GET_ONE: (id) => `${ROUTES.USER}/${id}`,
    },
};
