import { createAction, props } from '@ngrx/store';

import * as models from 'src/app/models';

// group
// comment
export const POST_COMMENT = '[Dashboard] Post comment';
export const POST_COMMENT_FAIL = '[Dashboard] Post comment fail';
export const POST_COMMENT_SUCCESS = '[Dashboard] Post comment success';

export const PostComment = createAction(
  POST_COMMENT,
  props<{
    comment: models.RequestComment;
    sectionId: number;
    postId: number;
  }>()
);
export const PostCommentFail = createAction(
  POST_COMMENT_FAIL,
  props<{ error: any }>()
);
export const PostCommentSuccess = createAction(
  POST_COMMENT_SUCCESS,
  props<{ comment: models.ResponseComment; sectionId: number }>()
);
