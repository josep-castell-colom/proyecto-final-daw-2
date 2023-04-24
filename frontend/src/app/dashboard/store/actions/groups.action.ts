import { createAction, props } from '@ngrx/store';

import { Group } from 'src/app/models/group.interface';
import { User } from 'src/app/models/user.interface';

// all groups
export const LOAD_ALL_GROUPS = '[Dashboard] Load groups';
export const LOAD_ALL_GROUPS_FAIL = '[Dashboard] Load groups fail';
export const LOAD_ALL_GROUPS_SUCCESS = '[Dashboard] Load groups success';

export const LoadAllGroups = createAction(LOAD_ALL_GROUPS);
export const LoadAllGroupsFail = createAction(
  LOAD_ALL_GROUPS_FAIL,
  props<{ error: any }>()
);
export const LoadAllGroupsSuccess = createAction(
  LOAD_ALL_GROUPS_SUCCESS,
  props<{ groups: Group[] }>()
);

// auth user groups
export const LOAD_AUTH_USER_GROUPS = '[Dashboard] Load auth user groups';
export const LOAD_AUTH_USER_GROUPS_FAIL =
  '[Dashboard] Load auth user groups fail';
export const LOAD_AUTH_USER_GROUPS_SUCCESS =
  '[Dashboard] Load auth user groups success';

export const LoadAuthUserGroups = createAction(LOAD_AUTH_USER_GROUPS);
export const LoadAuthUserGroupsFail = createAction(
  LOAD_AUTH_USER_GROUPS_FAIL,
  props<{ error: any }>()
);
export const LoadAuthUserGroupsSuccess = createAction(
  LOAD_AUTH_USER_GROUPS_SUCCESS,
  props<{ groups: Group[] }>()
);
