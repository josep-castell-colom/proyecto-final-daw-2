import { Group, User } from 'src/app/models';

export interface GroupsState {
  groupEntities: { [id: number]: Group };
  userEntities: { [id: number]: User };
  collapsedAside: boolean;
  loaded: boolean;
  loading: boolean;
}

export const GROUPS_FEATURE_KEY = 'Groups';

export const allGroupsInitialState: GroupsState = {
  groupEntities: {},
  userEntities: {},
  collapsedAside: false,
  loaded: false,
  loading: false,
};
