import { createAction, props } from '@ngrx/store';

import * as fromModels from 'src/app/models';

export const LOAD_ALL_GROUPS = '[Dashboard] Load groups';
export const LOAD_ALL_GROUPS_FAIL = '[Dashboard] Load groups fail';
export const LOAD_ALL_GROUPS_SUCCESS = '[Dashboard] Load groups success';

export const LOAD_AUTH_USER_GROUPS = '[Dashboard] Load auth user groups';
export const LOAD_AUTH_USER_GROUPS_FAIL =
  '[Dashboard] Load auth user groups fail';
export const LOAD_AUTH_USER_GROUPS_SUCCESS =
  '[Dashboard] Load auth user groups success';

export const POST_POST = '[Dashboard] Post post';
export const POST_POST_FAIL = '[Dashboard] Post post fail';
export const POST_POST_SUCCESS = '[Dashboard] Post post success';
export const POST_COMMENT = '[Dashboard] Post comment';
export const POST_COMMENT_FAIL = '[Dashboard] Post comment fail';
export const POST_COMMENT_SUCCESS = '[Dashboard] Post comment success';

export const COLLAPSE_ASIDE = '[Dashboard] Collapse aside';

export const LoadAllGroups = createAction(LOAD_ALL_GROUPS);
export const LoadAllGroupsFail = createAction(
  LOAD_ALL_GROUPS_FAIL,
  props<{ error: any }>()
);
export const LoadAllGroupsSuccess = createAction(
  LOAD_ALL_GROUPS_SUCCESS,
  props<{ groups: fromModels.Group[] }>()
);

export const LoadAuthUserGroups = createAction(LOAD_AUTH_USER_GROUPS);
export const LoadAuthUserGroupsFail = createAction(
  LOAD_AUTH_USER_GROUPS_FAIL,
  props<{ error: any }>()
);
export const LoadAuthUserGroupsSuccess = createAction(
  LOAD_AUTH_USER_GROUPS_SUCCESS,
  props<{ groups: fromModels.Group[] }>()
);

export const PostPost = createAction(
  POST_POST,
  props<{
    groupId: number;
    sectionId: number;
    post: fromModels.PostRequest;
  }>()
);
export const PostPostFail = createAction(
  POST_POST_FAIL,
  props<{ error: any }>()
);
export const PostPostSuccess = createAction(
  POST_POST_SUCCESS,
  props<{
    groupId: number;
    sectionId: number;
    post: fromModels.Post;
  }>()
);

export const PostComment = createAction(
  POST_COMMENT,
  props<{
    group_id: number;
    sectionId: number;
    postId: number;
    comment: fromModels.RequestComment;
  }>()
);
export const PostCommentFail = createAction(
  POST_COMMENT_FAIL,
  props<{ error: any }>()
);
export const PostCommentSuccess = createAction(
  POST_COMMENT_SUCCESS,
  props<{
    group_id: number;
    comment: fromModels.ResponseComment;
    sectionId: number;
  }>()
);

export const CollapseAside = createAction(COLLAPSE_ASIDE);
