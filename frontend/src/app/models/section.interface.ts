import { Post } from './post.interface';

export interface Section {
  id: number;
  name: string;
  isPublic: boolean;
  posts: Post[];
  group_id: number;
}
