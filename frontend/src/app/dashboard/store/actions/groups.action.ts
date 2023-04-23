import { Action, createAction, props } from '@ngrx/store';

import { Group } from 'src/app/models/group.interface';

// load groups
export const LOAD_GROUPS = '[Dashboard] Load groups';
export const LOAD_GROUPS_FAIL = '[Dashboard] Load groups fail';
export const LOAD_GROUPS_SUCCESS = '[Dashboard] Load groups success';

// export class LoadGroups implements Action {
//   readonly type = LOAD_GROUPS;
// }

// export class LoadGroupsFail implements Action {
//   readonly type = LOAD_GROUPS_FAIL;
//   constructor(public payload: any) {}
// }

// export class LoadGroupsSuccess implements Action {
//   readonly type = LOAD_GROUPS_SUCCESS;
//   constructor(public payload: Group[]) {}
// }

export const LoadGroups = createAction(LOAD_GROUPS);
export const LoadGroupsFail = createAction(
  LOAD_GROUPS_FAIL,
  props<{ payload: any }>
);
export const LoadGroupsSuccess = createAction(
  LOAD_GROUPS_SUCCESS,
  props<{ payload: Group[] }>
);

// // action types
// export type GroupsAction = LoadGroups | LoadGroupsFail | LoadGroupsSuccess;
