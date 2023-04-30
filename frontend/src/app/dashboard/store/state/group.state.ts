import { Group } from 'src/app/models/group.interface';

export interface GroupState {
  group: Group;
  loaded: boolean;
  loading: boolean;
}

export const GROUP_FEATURE_KEY = 'Group';

export const initialState: GroupState = {
  group: { id: 0, name: '', sections: [] },
  loaded: false,
  loading: false,
};
