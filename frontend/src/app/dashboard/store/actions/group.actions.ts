import { createAction, props } from '@ngrx/store';

import * as models from 'src/app/models';

// group
export const LOAD_GROUP = '[Dashboard] Load group by id';
export const LOAD_GROUP_FAIL = '[Dashboard] Load group by id fail';
export const LOAD_GROUP_SUCCESS = '[Dashboard] Load group by id success';

export const LoadGroup = createAction(LOAD_GROUP, props<{ id: number }>());
export const LoadGroupFail = createAction(
  LOAD_GROUP_FAIL,
  props<{ error: any }>()
);
export const LoadGroupSuccess = createAction(
  LOAD_GROUP_SUCCESS,
  props<{ group: models.Group }>()
);

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
