import { Action, createReducer, on } from '@ngrx/store';
import { initialState, GroupState } from '../state/groups.state';
import * as actions from '../actions/groups.action';

export const reducer = createReducer(
  initialState,
  on(actions.LoadAllGroups, (state: GroupState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(actions.LoadAllGroupsSuccess, (state: GroupState, { groups }) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      groups,
    };
  }),
  on(actions.LoadAllGroupsFail, (state: GroupState) => {
    return {
      ...state,
      loading: false,
      loaded: false,
    };
  }),
  on(actions.LoadAuthUserGroups, (state: GroupState) => {
    return {
      ...state,
      loading: true,
      loaded: false,
    };
  }),
  on(actions.LoadAuthUserGroupsSuccess, (state: GroupState, { groups }) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      authUserGroups: groups,
    };
  }),
  on(actions.LoadAuthUserGroupsFail, (state: GroupState) => {
    return {
      ...state,
      loading: false,
      loaded: false,
    };
  })
);

export function GroupsReducer(state: GroupState, action: Action) {
  return reducer(state, action);
}
