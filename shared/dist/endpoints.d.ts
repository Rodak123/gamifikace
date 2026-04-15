export declare const ENDPOINTS: {
    readonly ROOT: {
        readonly HEALTH: () => "/health";
    };
    readonly ACHIEVEMENT: {
        readonly GET_ALL: () => "/achievement/all";
        readonly CREATE: () => "/achievement/create";
        readonly GET_ONE: (key: string) => `/achievement/${string}`;
    };
    readonly USER: {
        readonly INFO: () => "/user/info";
    };
    readonly AUTH: {
        readonly LOGIN: () => "/auth/login";
        readonly LOGIN_DEV: () => "/auth/loginDev";
        readonly LOGOUT: () => "/auth/logout";
    };
};
