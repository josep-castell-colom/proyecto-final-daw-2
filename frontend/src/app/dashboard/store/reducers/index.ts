import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromState from '../state/';
import * as fromGroups from './groups.reducer';
// import * as fromGroup from './group.reducer';

export const reducers: ActionReducerMap<fromState.DashboardState> = {
  groups: fromGroups.groupsReducer,
};

export const getDashboardState =
  createFeatureSelector<fromState.DashboardState>(fromState.FEATURE_KEY);

export * from './groups.reducer';
// export * from './group.reducer';
