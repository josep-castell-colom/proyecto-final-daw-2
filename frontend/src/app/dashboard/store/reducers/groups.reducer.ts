import { Action, createReducer, on } from '@ngrx/store';
import { initialState, GroupState } from '../state/groups.state';
import * as actions from '../actions/groups.action';

export const reducer = createReducer(
  initialState,
  on(actions.LoadGroups, (state: GroupState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(actions.LoadGroupsSuccess, (state: GroupState, { groups }) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      groups,
    };
  }),
  on(actions.LoadGroupsFail, (state: GroupState) => {
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
