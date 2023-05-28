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
      loading: true,
    };
  }),
  on(
    actions.PostPostSuccess,
    (state: GroupsState, { groupId, sectionId, post }) => {
      const newGroup: Group = JSON.parse(
        JSON.stringify(state.entities[groupId])
      );
      const section = newGroup.sections.find(
        (section) => section.id === sectionId
      );
      section?.posts.push(post);

      const entities = {
        ...state.entities,
        [groupId]: newGroup,
      };

      return {
        ...state,
        entities,
        loading: false,
      };
    }
  ),
  on(
    actions.PostCommentSuccess,
    (state: GroupsState, { group_id, comment, sectionId }) => {
      const newGroup: Group = JSON.parse(
        JSON.stringify(state.entities[group_id])
      );
      const section = newGroup.sections.find(
        (section) => section.id === sectionId
      );
      const post = section?.posts.find((post) => post.id === comment.post.id);
      const comments = post?.comments;
      comments?.push(comment);

      const entities = {
        ...state.entities,
        [group_id]: newGroup,
      };

      return {
        ...state,
        entities,
        loading: false,
      };
    }
  ),
  on(actions.CollapseAside, (state: GroupsState) => {
    return {
      ...state,
      collapsedAside: !state.collapsedAside,
    };
  })
);

export function GroupsReducer(state: GroupsState, action: Action) {
  return groupsReducer(state, action);
}
