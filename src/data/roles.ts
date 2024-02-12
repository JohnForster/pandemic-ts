import JSON_ROLES from './roles.json';

type Role = {
  inUse: boolean;
  pawnId: number;
  role: string;
};

export const ROLES: Role[] = JSON_ROLES;
