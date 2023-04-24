import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromState from '../state/';
import * as fromGroups from './groups.reducer';

export const reducers: ActionReducerMap<fromState.DashboardState> = {
  groups: fromGroups.reducer,
  authUserGroups: fromGroups.reducer,
};

export const getDashboardState =
  createFeatureSelector<fromState.DashboardState>(fromState.FEATURE_KEY);

// groups state
export const getGroupsState = createSelector(
  getDashboardState,
  fromState.getGroupState
);

export const getGroupsLoading = createSelector(
  getGroupsState,
  fromState.getGroupsLoadingState
);

export const getAllGroups = createSelector(
  getGroupsState,
  fromState.getAllGroupsState
);

export const getGroupsLoaded = createSelector(
  getGroupsState,
  fromState.getGroupsLoadedState
);

export * from './groups.reducer';
