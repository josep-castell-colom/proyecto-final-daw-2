import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromState from '../state';
import { Group } from 'src/app/models';

export const getGroupsState = createSelector(
  fromFeature.getDashboardState,
  (state: fromState.DashboardState) => state.groups
);

export const getAllGroupsEntities = createSelector(
  getGroupsState,
  (state: fromState.GroupsState) => state.entities
);

export const getAllGroups = createSelector(getAllGroupsEntities, (entities) => {
  return Object.keys(entities).map((id) => entities[parseInt(id, 10)]);
});

export const getGroupsLoading = createSelector(
  getGroupsState,
  (state: fromState.GroupsState) => state.loading
);

export const getGroupsLoaded = createSelector(
  getGroupsState,
  (state: fromState.GroupsState) => state.loaded
);

export const getSelectedGroup = createSelector(
  getAllGroupsEntities,
  fromRoot.getRouterState,
  (entities, router): Group => {
    return router.state && entities[(router.state.params as any).id];
  }
);
