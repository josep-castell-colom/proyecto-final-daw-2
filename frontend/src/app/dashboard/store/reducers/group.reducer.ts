import { Action, createReducer, on } from '@ngrx/store';
import { initialState, GroupState } from '../state/group.state';
import * as actions from '../actions/group.actions';

export const groupReducer = createReducer(
  initialState,
  on(actions.LoadGroup, (state: GroupState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(actions.LoadGroupSuccess, (state: GroupState, { group }) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      group,
    };
  }),
  on(actions.LoadGroupFail, (state: GroupState) => {
    return {
      ...state,
      loading: false,
      loaded: false,
    };
  })
);

export function GroupReducer(state: GroupState, action: Action) {
  return groupReducer(state, action);
}
