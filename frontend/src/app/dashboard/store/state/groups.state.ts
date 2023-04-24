import { Group } from 'src/app/models/group.interface';

export interface GroupState {
  groups: Group[];
  loaded: boolean;
  loading: boolean;
}

export const GROUPS_FEATURE_KEY = 'Groups';

export const initialState: GroupState = {
  groups: [],
  loaded: false,
  loading: false,
};

export const getGroupsLoadingState = (state: GroupState) => state.loading;
export const getGroupsLoadedState = (state: GroupState) => state.loaded;
export const getAllGroupsState = (state: GroupState) => state.groups;
