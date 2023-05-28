import { ResponseComment } from './response-comment.interface';
import * as models from './';

export interface Post {
  id: number;
  user: models.User;
  title: string;
  body: string;
  image?: string;
  comments: ResponseComment[];
  section: models.Section;
}

export interface PostRequest {
  user_id: number;
  title: string;
  body: string;
  image?: string;
  section_id: number;
}
