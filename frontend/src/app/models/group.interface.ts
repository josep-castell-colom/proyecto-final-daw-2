import { Section } from './section.interface';

export interface Group {
  id: number;
  name: string;
  city?: string;
  description?: string;
  sections: Section[];
  image?: string;
}
