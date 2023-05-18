import { Post } from './post.interface';
import { User } from './user.interface';

export interface ResponseComment {
  id?: number;
  body: string;
  user: User;
  post: Post;
}
