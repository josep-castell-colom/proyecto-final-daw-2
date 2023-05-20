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
    group: models.Group;
    sectionId: number;
    postId: number;
    comment: models.RequestComment;
  }>()
);
export const PostCommentFail = createAction(
  POST_COMMENT_FAIL,
  props<{ error: any }>()
);
export const PostCommentSuccess = createAction(
  POST_COMMENT_SUCCESS,
  props<{
    group: models.Group;
    comment: models.ResponseComment;
    sectionId: number;
  }>()
);
