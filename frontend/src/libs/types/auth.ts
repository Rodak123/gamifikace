import type { Role } from '@gamifikace/shared';

export interface AuthData {
  isAuthenticated: boolean;
  hasAccess: (role: Role) => boolean;
}
