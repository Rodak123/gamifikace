import { Role, ROLE_ORDER } from '../types';

export const hasAccess = (role: Role, minRole: Role) => {
  return ROLE_ORDER[role] >= ROLE_ORDER[minRole];
};
