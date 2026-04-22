import { Role } from './role';

export interface BaseAuth {
  isAuthenticated: boolean;
}

export interface AuthenticatedAuth extends BaseAuth {
  isAuthenticated: true;
  minRole: Role;
}

export interface UnauthenticatedAuth extends BaseAuth {
  isAuthenticated: false;
  minRole?: never;
}

export type Auth<TIsAuth extends boolean> = TIsAuth extends true
  ? AuthenticatedAuth
  : UnauthenticatedAuth;
