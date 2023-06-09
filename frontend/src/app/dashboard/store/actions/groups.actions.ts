import { createAction, props } from '@ngrx/store';

import * as fromModels from 'src/app/models';
import { Group, User } from 'src/app/models';

export const LOAD_ALL_GROUPS = '[Dashboard] Load groups';
export const LOAD_ALL_GROUPS_FAIL = '[Dashboard] Load groups fail';
export const LOAD_ALL_GROUPS_SUCCESS = '[Dashboard] Load groups success';
export const LOAD_ALL_USERS = '[Dashboard] Load users';
export const LOAD_ALL_USERS_FAIL = '[Dashboard] Load users fail';
export const LOAD_ALL_USERS_SUCCESS = '[Dashboard] Load users success';

export const LOAD_AUTH_USER_GROUPS = '[Dashboard] Load auth user groups';
export const LOAD_AUTH_USER_GROUPS_FAIL =
  '[Dashboard] Load auth user groups fail';
export const LOAD_AUTH_USER_GROUPS_SUCCESS =
  '[Dashboard] Load auth user groups success';

export const POST_POST = '[Dashboard] Post post';
export const POST_POST_FAIL = '[Dashboard] Post post fail';
export const POST_POST_SUCCESS = '[Dashboard] Post post success';
export const DELETE_POST = '[Dashboard] Delete post';
export const DELETE_POST_FAIL = '[Dashboard] Delete post fail';
export const DELETE_POST_SUCCESS = '[Dashboard] Delete post success';
export const POST_COMMENT = '[Dashboard] Post comment';
export const POST_COMMENT_FAIL = '[Dashboard] Post comment fail';
export const POST_COMMENT_SUCCESS = '[Dashboard] Post comment success';
export const DELETE_COMMENT = '[Dashboard] Delete comment';
export const DELETE_COMMENT_FAIL = '[Dashboard] Delete comment fail';
export const DELETE_COMMENT_SUCCESS = '[Dashboard] Delete comment success';

export const ADD_GROUP = '[Dashboard] Add group';
export const ADD_GROUP_FAIL = '[Dashboard] Add group fail';
export const ADD_GROUP_SUCCESS = '[Dashboard] Add group success';
export const EDIT_GROUP = '[Dashboard] Edit group';
export const EDIT_GROUP_FAIL = '[Dashboard] Edit group fail';
export const EDIT_GROUP_SUCCESS = '[Dashboard] Edit group success';
export const DELETE_GROUP = '[Dashboard] Delete group';
export const DELETE_GROUP_FAIL = '[Dashboard] Delete group fail';
export const DELETE_GROUP_SUCCESS = '[Dashboard] Delete group success';

export const ADD_SECTION = '[Dashboard] Add section';
export const ADD_SECTION_SUCCESS = '[Dashboard] Add section success';
export const ADD_SECTION_FAIL = '[Dashboard] Add section fail';

export const EDIT_USER = '[Dashboard] Edit user';
export const EDIT_USER_FAIL = '[Dashboard] Edit user fail';
export const EDIT_USER_SUCCESS = '[Dashboard] Edit user success';

export const FOLLOW_GROUP = '[Dashboard] Follow group';
export const FOLLOW_GROUP_SUCCESS = '[Dashboard] Follow group success';
export const FOLLOW_GROUP_FAIL = '[Dashboard] Follow group fail';

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

export const LoadAllUsers = createAction(LOAD_ALL_USERS);
export const LoadAllUsersFail = createAction(
  LOAD_ALL_USERS_FAIL,
  props<{ error: any }>()
);
export const LoadAllUsersSuccess = createAction(
  LOAD_ALL_USERS_SUCCESS,
  props<{ users: fromModels.User[] }>()
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
export const DeletePost = createAction(
  DELETE_POST,
  props<{
    postId: number;
    sectionId: number;
    groupId: number;
  }>()
);
export const DeletePostFail = createAction(
  DELETE_POST_FAIL,
  props<{ error: any }>()
);
export const DeletePostSuccess = createAction(
  DELETE_POST_SUCCESS,
  props<{
    postId: number;
    sectionId: number;
    groupId: number;
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
export const DeleteComment = createAction(
  DELETE_COMMENT,
  props<{
    commentId: number;
    groupId: number;
    sectionId: number;
    postId: number;
  }>()
);
export const DeleteCommentFail = createAction(
  DELETE_COMMENT_FAIL,
  props<{ error: any }>()
);
export const DeleteCommentSuccess = createAction(
  DELETE_COMMENT_SUCCESS,
  props<{
    commentId: number;
    groupId: number;
    sectionId: number;
    postId: number;
  }>()
);
export const AddGroup = createAction(
  ADD_GROUP,
  props<{
    group: fromModels.GroupAdd;
    user: User;
  }>()
);
export const AddGroupFail = createAction(
  ADD_GROUP_FAIL,
  props<{ error: any }>()
);
export const AddGroupSuccess = createAction(
  ADD_GROUP_SUCCESS,
  props<{
    group: Group;
    user: User;
  }>()
);
export const EditGroup = createAction(
  EDIT_GROUP,
  props<{
    group_id: number;
    group: fromModels.GroupUpdate;
  }>()
);
export const EditGroupFail = createAction(
  EDIT_GROUP_FAIL,
  props<{ error: any }>()
);
export const EditGroupSuccess = createAction(
  EDIT_GROUP_SUCCESS,
  props<{
    group_id: number;
    group: Group;
  }>()
);
export const DeleteGroup = createAction(
  DELETE_GROUP,
  props<{
    group_id: number;
  }>()
);
export const DeleteGroupFail = createAction(
  DELETE_GROUP_FAIL,
  props<{ error: any }>()
);
export const DeleteGroupSuccess = createAction(
  DELETE_GROUP_SUCCESS,
  props<{
    group_id: number;
  }>()
);
export const AddSection = createAction(
  ADD_SECTION,
  props<{ section: fromModels.Section }>()
);
export const AddSectionSuccess = createAction(
  ADD_SECTION_SUCCESS,
  props<{ section: fromModels.Section }>()
);
export const AddSectionFail = createAction(
  ADD_SECTION_FAIL,
  props<{ error: any }>()
);
export const EditUser = createAction(
  EDIT_USER,
  props<{
    user_id: number;
    user: fromModels.UserUpdate;
  }>()
);
export const EditUserFail = createAction(
  EDIT_USER_FAIL,
  props<{ error: any }>()
);
export const EditUserSuccess = createAction(
  EDIT_USER_SUCCESS,
  props<{
    user_id: number;
    user: User;
  }>()
);
export const FollowGroup = createAction(
  FOLLOW_GROUP,
  props<{
    follow: boolean;
    user_id: number;
    group_id: number;
  }>()
);
export const FollowGroupSuccess = createAction(
  FOLLOW_GROUP_SUCCESS,
  props<{ follow: boolean; group_id: number; user_id: number }>()
);
export const FollowGroupFail = createAction(FOLLOW_GROUP_FAIL);

export const CollapseAside = createAction(COLLAPSE_ASIDE);
