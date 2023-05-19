import { GroupState } from './group.state';
import { GroupsState } from './groups.state';

export const FEATURE_KEY = 'dashboard';

export interface DashboardState {
  groups: GroupsState;
  authUserGroups: GroupsState;
}
