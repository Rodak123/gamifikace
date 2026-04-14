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
        readonly GET_ONE: (id: string) => `/user/${string}`;
    };
};
