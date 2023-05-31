import { Section } from './section.interface';
import { User } from './user.interface';

export interface Group {
  id: number;
  name: string;
  city?: string;
  description?: string;
  sections: Section[];
  image?: string;
  users: GroupUser[];
}

export interface GroupUser {
  id: number;
  name: string;
  lastname: string;
  instrument?: {
    id: number;
    name: string;
  }[];
  pivot: {
    isMember: boolean;
    isAdmin: boolean;
  };
}

export interface GroupAdd {
  name?: string;
  city?: string;
  description?: string;
  image?: string;
  users?: number[];
}

export interface GroupUpdate {
  id: number;
  name?: string;
  city?: string;
  description?: string;
  image?: string;
  users?: number[];
}
