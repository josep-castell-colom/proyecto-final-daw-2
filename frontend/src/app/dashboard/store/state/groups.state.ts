import { Group } from 'src/app/models/group.interface';

export interface GroupsState {
  groups: Group[];
  loaded: boolean;
  loading: boolean;
}

export const GROUPS_FEATURE_KEY = 'Groups';

export const allGroupsInitialState: GroupsState = {
  groups: [],
  loaded: false,
  loading: false,
};
