import { Action, createReducer, on } from '@ngrx/store';
import { allGroupsInitialState, GroupsState } from '../state/groups.state';
import * as actions from '../actions/groups.actions';
import { Group } from 'src/app/models';

export const groupsReducer = createReducer(
  allGroupsInitialState,
  on(actions.LoadAllGroups, (state: GroupsState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(actions.LoadAllGroupsSuccess, (state: GroupsState, { groups }) => {
    const entities = groups.reduce(
      (entities: { [id: number]: Group }, group: Group) => {
        return {
          ...entities,
          [group.id]: group,
        };
      },
      {
        ...state.entities,
      }
    );

    return {
      ...state,
      loading: false,
      loaded: true,
      entities,
    };
  }),
  on(actions.LoadAllGroupsFail, (state: GroupsState) => {
    return {
      ...state,
      loading: false,
      loaded: false,
    };
  }),
  on(actions.PostComment, (state: GroupsState) => {
    return {
      ...state,
      loadingComments: true,
    };
  }),
  on(
    actions.PostCommentSuccess,
    (state: GroupsState, { group, comment, sectionId }) => {
      if (!group)
        return {
          ...state,
        };
      const newGroup: Group = JSON.parse(JSON.stringify(group));
      const section = newGroup.sections.find(
        (section) => section.id === sectionId
      );
      const post = section?.posts.find((post) => post.id === comment.post.id);
      const comments = post?.comments;
      comments?.push(comment);

      const entities = {
        ...state.entities,
        [group.id]: newGroup,
      };

      return {
        ...state,
        entities,
        loadingComments: false,
      };
    }
  )
);

export function GroupsReducer(state: GroupsState, action: Action) {
  return groupsReducer(state, action);
}
