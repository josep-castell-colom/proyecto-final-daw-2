import {
  Action,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromGroups from './groups.reducer';

export const FEATURE_KEY = 'dashboard';

export interface DashboardState {
  groups: fromGroups.GroupState;
}

export const reducers: ActionReducerMap<DashboardState> = {
  groups: fromGroups.reducer,
};

export const getDashboardState =
  createFeatureSelector<DashboardState>(FEATURE_KEY);

// groups state
export const getGroupsState = createSelector(
  getDashboardState,
  (state: DashboardState) => state.groups
);

export const getGroupsLoading = createSelector(
  getGroupsState,
  (state: fromGroups.GroupState) => state.loading
);

export const getGroups = createSelector(
  getGroupsState,
  (state: fromGroups.GroupState) => state.data
);

export const getGroupsLoaded = createSelector(
  getGroupsState,
  (state: fromGroups.GroupState) => state.loaded
);

// export function DashboardReducer(state: DashboardState, action: Action) {
//   return fromGroups.reducer()
// }

export * from './groups.reducer';
