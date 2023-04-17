import { User } from './user.interface';

export interface Post {
  id: number;
  title: string;
  body: string;
  user: User;
  comments: Comment[];
}
