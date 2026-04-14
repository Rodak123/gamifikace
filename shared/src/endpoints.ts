const ROUTES = {
  ROOT: '',
  USER: '/user',
  ACHIEVEMENT: '/achievement',
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
    GET_ONE: (id: string) => `${ROUTES.USER}/${id}` as const,
  },
} as const;
