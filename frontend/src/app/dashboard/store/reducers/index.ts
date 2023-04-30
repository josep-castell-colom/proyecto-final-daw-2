import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromState from '../state/';
import * as fromGroups from './groups.reducer';
import * as fromGroup from './group.reducer';

export const reducers: ActionReducerMap<fromState.DashboardState> = {
  groups: fromGroups.groupsReducer,
  authUserGroups: fromGroups.groupsReducer,
  selectedGroup: fromGroup.groupReducer,
};

export const getDashboardState =
  createFeatureSelector<fromState.DashboardState>(fromState.FEATURE_KEY);

// groups state
export const getGroupsState = createSelector(
  getDashboardState,
  (state: fromState.DashboardState) => state.groups
);

export const getAllGroups = createSelector(
  getGroupsState,
  (state: fromState.GroupsState) => state.groups
);

export const getGroupsLoading = createSelector(
  getGroupsState,
  (state: fromState.GroupsState) => state.loading
);

export const getGroupsLoaded = createSelector(
  getGroupsState,
  (state: fromState.GroupsState) => state.loaded
);

// auth user groups
export const getAuthUserGroupsState = createSelector(
  getDashboardState,
  (state: fromState.DashboardState) => state.authUserGroups
);

export const getAuthUserGroups = createSelector(
  getAuthUserGroupsState,
  (state: fromState.GroupsState) => state.groups
);

export const getAuthUserGroupsLoading = createSelector(
  getAuthUserGroupsState,
  (state: fromState.GroupsState) => state.loading
);

export const getAuthUserGroupsLoaded = createSelector(
  getAuthUserGroupsState,
  (state: fromState.GroupsState) => state.loaded
);

// selected group
export const getSelectedGroupState = createSelector(
  getDashboardState,
  (state: fromState.DashboardState) => state.selectedGroup
);

export const getSelectedGroup = createSelector(
  getSelectedGroupState,
  (state: fromState.GroupState) => state.group
);

export const getSelectedGroupLoading = createSelector(
  getSelectedGroupState,
  (state: fromState.GroupState) => state.loading
);

export const getSelectedGroupLoaded = createSelector(
  getSelectedGroupState,
  (state: fromState.GroupState) => state.loaded
);
export * from './groups.reducer';
export * from './group.reducer';
