export declare const ROLES: {
    readonly USER: "USER";
    readonly ADMIN: "ADMIN";
    readonly SUPERADMIN: "SUPERADMIN";
};
export type Role = (typeof ROLES)[keyof typeof ROLES];
export declare const ROLE_ORDER: Record<Role, number>;
