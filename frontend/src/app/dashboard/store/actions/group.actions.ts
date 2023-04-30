import { createAction, props } from '@ngrx/store';

import { Group } from 'src/app/models/group.interface';

// one group
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
  props<{ group: Group }>()
);
