import { ID } from '../../shared/commonTypes';

export interface DBUser {
  id: ID;
  login: string;
  password: string;
}

export interface LoginData {
  login: string;
  password: string;
}
