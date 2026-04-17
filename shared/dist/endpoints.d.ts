import { Endpoint } from './types/endpoint';
export declare const ENDPOINTS: {
    readonly ROOT: {
        readonly HEALTH: Endpoint<import("zod").ZodObject<{
            body: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            params: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
            data: import("zod").ZodObject<{
                database: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, false>;
    };
    readonly GAME: {
        readonly GET_SCOREBOARD: Endpoint<import("zod").ZodObject<{
            body: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            params: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
            data: import("zod").ZodObject<{
                scoreboard: import("zod").ZodArray<import("zod").ZodObject<{
                    user: import("zod").ZodObject<{
                        id: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>;
                    totalXp: import("zod").ZodNumber;
                    logs: import("zod").ZodArray<import("zod").ZodObject<{
                        userId: import("zod").ZodString;
                        achievementKey: import("zod").ZodString;
                        earnedAt: import("zod").ZodDate;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, false>;
    };
    readonly ACHIEVEMENT: {
        readonly GET_ALL: Endpoint<import("zod").ZodObject<{
            body: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            params: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
            data: import("zod").ZodObject<{
                achievements: import("zod").ZodArray<import("zod").ZodObject<{
                    key: import("zod").ZodString;
                    xp: import("zod").ZodNumber;
                    name: import("zod").ZodString;
                    description: import("zod").ZodString;
                    createdAt: import("zod").ZodDate;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, false>;
        readonly CREATE: Endpoint<import("zod").ZodObject<{
            params: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            body: import("zod").ZodObject<{
                key: import("zod").ZodString;
                description: import("zod").ZodString;
                xp: import("zod").ZodNumber;
                name: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
            data: import("zod").ZodObject<{
                achievement: import("zod").ZodObject<{
                    key: import("zod").ZodString;
                    xp: import("zod").ZodNumber;
                    name: import("zod").ZodString;
                    description: import("zod").ZodString;
                    createdAt: import("zod").ZodDate;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, false>;
        readonly GET_ONE: Endpoint<import("zod").ZodObject<{
            body: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            params: import("zod").ZodObject<{
                key: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
            data: import("zod").ZodObject<{
                achievement: import("zod").ZodObject<{
                    key: import("zod").ZodString;
                    xp: import("zod").ZodNumber;
                    name: import("zod").ZodString;
                    description: import("zod").ZodString;
                    createdAt: import("zod").ZodDate;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, false>;
        readonly EARN: Endpoint<import("zod").ZodObject<{
            params: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            body: import("zod").ZodObject<{
                achievement: import("zod").ZodObject<{
                    key: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                user: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
            data: import("zod").ZodObject<{
                log: import("zod").ZodObject<{
                    userId: import("zod").ZodString;
                    achievementKey: import("zod").ZodString;
                    earnedAt: import("zod").ZodDate;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, false>;
        readonly REVOKE: Endpoint<import("zod").ZodObject<{
            params: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            body: import("zod").ZodObject<{
                achievement: import("zod").ZodObject<{
                    key: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                user: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
            data: import("zod").ZodObject<{
                achievementRevoked: import("zod").ZodLiteral<true>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, false>;
        readonly GET_MINE: Endpoint<import("zod").ZodObject<{
            body: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            params: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
            data: import("zod").ZodObject<{
                achievements: import("zod").ZodArray<import("zod").ZodObject<{
                    key: import("zod").ZodString;
                    xp: import("zod").ZodNumber;
                    name: import("zod").ZodString;
                    description: import("zod").ZodString;
                    createdAt: import("zod").ZodDate;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, true>;
    };
    readonly USER: {
        readonly ME: Endpoint<import("zod").ZodObject<{
            body: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            params: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
            data: import("zod").ZodObject<{
                user: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    email: import("zod").ZodString;
                    nickname: import("zod").ZodString;
                    firstName: import("zod").ZodString;
                    lastName: import("zod").ZodString;
                    createdAt: import("zod").ZodDate;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, true>;
        readonly GET_ONE: Endpoint<import("zod").ZodObject<{
            body: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            params: import("zod").ZodObject<{
                id: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
            data: import("zod").ZodObject<{
                user: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    nickname: import("zod").ZodString;
                    firstName: import("zod").ZodString;
                    lastName: import("zod").ZodString;
                    createdAt: import("zod").ZodDate;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, false>;
        readonly GET_ALL: Endpoint<import("zod").ZodObject<{
            body: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            params: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
            data: import("zod").ZodObject<{
                users: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    nickname: import("zod").ZodString;
                    firstName: import("zod").ZodString;
                    lastName: import("zod").ZodString;
                    createdAt: import("zod").ZodDate;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, true>;
    };
    readonly AUTH: {
        readonly LOGIN: Endpoint<import("zod").ZodObject<{
            params: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            body: import("zod").ZodObject<{
                credential: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
            data: import("zod").ZodObject<{
                user: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    email: import("zod").ZodString;
                    nickname: import("zod").ZodString;
                    firstName: import("zod").ZodString;
                    lastName: import("zod").ZodString;
                    createdAt: import("zod").ZodDate;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, false>;
        readonly LOGIN_DEV: Endpoint<import("zod").ZodObject<{
            body: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            params: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
            data: import("zod").ZodObject<{
                user: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    email: import("zod").ZodString;
                    nickname: import("zod").ZodString;
                    firstName: import("zod").ZodString;
                    lastName: import("zod").ZodString;
                    createdAt: import("zod").ZodDate;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, false>;
        readonly LOGOUT: Endpoint<import("zod").ZodObject<{
            body: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            params: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
            data: import("zod").ZodObject<{
                loggedOut: import("zod").ZodLiteral<true>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, true>;
    };
};
