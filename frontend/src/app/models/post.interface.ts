import { PostComment } from './post-comment.interface';
import { User } from './user.interface';

export interface Post {
  id: number;
  user: User;
  title: string;
  body: string;
  image?: string;
  comments: PostComment[];
}
