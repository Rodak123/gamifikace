import { ROLE_ORDER } from '../types';
export const hasAccess = (role, minRole) => {
    return ROLE_ORDER[role] >= ROLE_ORDER[minRole];
};
