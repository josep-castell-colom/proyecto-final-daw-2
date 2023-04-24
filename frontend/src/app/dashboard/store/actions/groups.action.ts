import { createAction, props } from '@ngrx/store';

import { Group } from 'src/app/models/group.interface';

// all groups
export const LOAD_GROUPS = '[Dashboard] Load groups';
export const LOAD_GROUPS_FAIL = '[Dashboard] Load groups fail';
export const LOAD_GROUPS_SUCCESS = '[Dashboard] Load groups success';

export const LoadGroups = createAction(LOAD_GROUPS);
export const LoadGroupsFail = createAction(
  LOAD_GROUPS_FAIL,
  props<{ error: any }>()
);
export const LoadGroupsSuccess = createAction(
  LOAD_GROUPS_SUCCESS,
  props<{ groups: Group[] }>()
);

// user groups
export const LOAD_AUTH_USER_GROUPS = '[Dashboard] Load groups';
export const LOAD_AUTH_USER_GROUPS_FAIL = '[Dashboard] Load groups fail';
export const LOAD_AUTH_USER_GROUPS_SUCCESS = '[Dashboard] Load groups success';

export const LoadAuthUserGroups = createAction(LOAD_AUTH_USER_GROUPS);
export const LoadAuthUserGroupsFail = createAction(
  LOAD_AUTH_USER_GROUPS_FAIL,
  props<{ error: any }>()
);
export const LoadAuthUserGroupsSuccess = createAction(
  LOAD_AUTH_USER_GROUPS_SUCCESS,
  props<{ groups: Group[] }>()
);
