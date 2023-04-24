import { createAction, props } from '@ngrx/store';

import { Group } from 'src/app/models/group.interface';

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

// user groups
export const LOAD_USER_GROUPS = '[Dashboard] Load user groups';
export const LOAD_USER_GROUPS_FAIL = '[Dashboard] Load user groups fail';
export const LOAD_USER_GROUPS_SUCCESS = '[Dashboard] Load user groups success';

export const LoadUserGroups = createAction(LOAD_USER_GROUPS);
export const LoadUserGroupsFail = createAction(
  LOAD_USER_GROUPS_FAIL,
  props<{ error: any }>()
);
export const LoadUserGroupsSuccess = createAction(
  LOAD_USER_GROUPS_SUCCESS,
  props<{ groups: Group[] }>()
);
