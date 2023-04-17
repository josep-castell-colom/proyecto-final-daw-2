import { Post } from './post.interface';

export interface Group {
  id: number;
  name: string;
  city?: string;
  description?: string;
  image?: string;
  posts?: Post[];
}
