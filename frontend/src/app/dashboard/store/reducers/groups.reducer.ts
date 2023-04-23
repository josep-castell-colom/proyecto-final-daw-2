import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/groups.action';
import { Group } from 'src/app/models/group.interface';

export interface GroupState {
  data: Group[];
  loaded: boolean;
  loading: boolean;
}

export const GROUPS_FEATURE_KEY = 'Groups';

export const initialState: GroupState = {
  data: [
    {
      id: 1,
      name: 'Es foradats',
      description: 'Quatre arreplegats',
      sections: [
        {
          id: 1,
          name: 'Anuncis',
          isPublic: true,
        },
        {
          id: 2,
          name: 'Coses nostres',
          isPublic: false,
        },
      ],
    },
  ],
  loaded: false,
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(actions.LoadGroups, (state: GroupState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(actions.LoadGroupsSuccess, (state: GroupState) => {
    return {
      ...state,
      loading: false,
      loaded: true,
    };
  }),
  on(actions.LoadGroupsFail, (state: GroupState) => {
    return {
      ...state,
      loading: false,
      loaded: false,
    };
  })
);

// export const getGroupsLoading = (state: GroupState) => state.loading;
// export const getGroupsLoaded = (state: GroupState) => state.loaded;
// export const getGroups = (state: GroupState) => state.data;

export function GroupsReducer(state: GroupState, action: Action) {
  return reducer(state, action);
}
