import { Group } from './group.interface';

export interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  image?: string;
  groups?: Group[];
}
