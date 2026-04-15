const ROUTES = {
  ROOT: '',
  USER: '/user',
  ACHIEVEMENT: '/achievement',
  AUTH: '/auth',
} as const;

export const ENDPOINTS = {
  ROOT: {
    HEALTH: () => `${ROUTES.ROOT}/health` as const,
  },
  ACHIEVEMENT: {
    GET_ALL: () => `${ROUTES.ACHIEVEMENT}/all` as const,
    CREATE: () => `${ROUTES.ACHIEVEMENT}/create` as const,
    GET_ONE: (key: string) => `${ROUTES.ACHIEVEMENT}/${key}` as const,
  },
  USER: {
    INFO: () => `${ROUTES.USER}/info` as const,
  },
  AUTH: {
    LOGIN: () => `${ROUTES.AUTH}/login` as const,
    LOGIN_DEV: () => `${ROUTES.AUTH}/loginDev` as const,
    LOGOUT: () => `${ROUTES.AUTH}/logout` as const,
  },
} as const;
