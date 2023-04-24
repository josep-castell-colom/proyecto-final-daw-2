import { GroupState } from './groups.state';

export const FEATURE_KEY = 'dashboard';

export interface DashboardState {
  groups: GroupState;
  authUserGroups: GroupState;
}

export const getGroupState = (state: DashboardState) => state.groups;
export const getAuthGroupsState = (state: DashboardState) =>
  state.authUserGroups;
