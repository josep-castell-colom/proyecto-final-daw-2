import { Group } from 'src/app/models/group.interface';

export interface GroupsState {
  entities: { [id: number]: Group };
  loaded: boolean;
  loading: boolean;
}

export const GROUPS_FEATURE_KEY = 'Groups';

export const allGroupsInitialState: GroupsState = {
  entities: {},
  loaded: false,
  loading: false,
};
