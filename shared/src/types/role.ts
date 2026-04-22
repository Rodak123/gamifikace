export const ROLES = {
  USER: 'USER',
  ADMIN: 'ADMIN',
  SUPERADMIN: 'SUPERADMIN',
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const ROLE_ORDER: Record<Role, number> = {
  USER: 1,
  ADMIN: 2,
  SUPERADMIN: 3,
} as const;
