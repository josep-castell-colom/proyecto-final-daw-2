import { Section } from './section.interface';
import { User } from './user.interface';

export interface Group {
  id: number;
  name: string;
  city?: string;
  description?: string;
  sections: Section[];
  image?: string;
  users: User[];
}
