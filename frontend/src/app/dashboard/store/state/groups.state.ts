import { Group } from 'src/app/models/group.interface';

export interface GroupsState {
  entities: { [id: number]: Group };
  collapsedAside: boolean;
  loaded: boolean;
  loading: boolean;
}

export const GROUPS_FEATURE_KEY = 'Groups';

export const allGroupsInitialState: GroupsState = {
  entities: {},
  collapsedAside: false,
  loaded: false,
  loading: false,
};
