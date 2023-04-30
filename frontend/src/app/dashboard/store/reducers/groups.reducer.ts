import { Action, createReducer, on } from '@ngrx/store';
import { allGroupsInitialState, GroupsState } from '../state/groups.state';
import * as actions from '../actions/groups.actions';

export const groupsReducer = createReducer(
  allGroupsInitialState,
  on(actions.LoadAllGroups, (state: GroupsState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(actions.LoadAllGroupsSuccess, (state: GroupsState, { groups }) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      groups,
    };
  }),
  on(actions.LoadAllGroupsFail, (state: GroupsState) => {
    return {
      ...state,
      loading: false,
      loaded: false,
    };
  }),
  on(actions.LoadAuthUserGroups, (state: GroupsState) => {
    return {
      ...state,
      loading: true,
      loaded: false,
    };
  }),
  on(actions.LoadAuthUserGroupsSuccess, (state: GroupsState, { groups }) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      authUserGroups: groups,
    };
  }),
  on(actions.LoadAuthUserGroupsFail, (state: GroupsState) => {
    return {
      ...state,
      loading: false,
      loaded: false,
    };
  })
);

export function GroupsReducer(state: GroupsState, action: Action) {
  return groupsReducer(state, action);
}
