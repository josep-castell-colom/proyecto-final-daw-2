import { Action, createReducer, on } from '@ngrx/store';
import { allGroupsInitialState, GroupsState } from '../state/groups.state';
import * as actions from '../actions/groups.actions';
import { Group, User } from 'src/app/models';

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
        ...state.groupEntities,
      }
    );

    return {
      ...state,
      loading: false,
      loaded: true,
      groupEntities: entities,
    };
  }),
  on(actions.LoadAllGroupsFail, (state: GroupsState) => {
    return {
      ...state,
      loading: false,
      loaded: false,
    };
  }),
  on(actions.LoadAllUsers, (state: GroupsState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(actions.LoadAllUsersSuccess, (state: GroupsState, { users }) => {
    const userEntities = users.reduce(
      (userEntities: { [id: number]: User }, user: User) => {
        return {
          ...userEntities,
          [user.id]: user,
        };
      },
      {
        ...state.userEntities,
      }
    );

    return {
      ...state,
      loading: false,
      loaded: true,
      userEntities: userEntities,
    };
  }),
  on(actions.LoadAllUsersFail, (state: GroupsState) => {
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
        JSON.stringify(state.groupEntities[groupId])
      );
      const section = newGroup.sections.find(
        (section) => section.id === sectionId
      );
      section?.posts.push(post);

      const entities = {
        ...state.groupEntities,
        [groupId]: newGroup,
      };

      return {
        ...state,
        groupEntities: entities,
        loading: false,
      };
    }
  ),
  on(
    actions.PostCommentSuccess,
    (state: GroupsState, { group_id, comment, sectionId }) => {
      const newGroup: Group = JSON.parse(
        JSON.stringify(state.groupEntities[group_id])
      );
      const section = newGroup.sections.find(
        (section) => section.id === sectionId
      );
      const post = section?.posts.find((post) => post.id === comment.post.id);
      const comments = post?.comments;
      comments?.push(comment);

      const entities = {
        ...state.groupEntities,
        [group_id]: newGroup,
      };

      return {
        ...state,
        groupEntities: entities,
        loading: false,
      };
    }
  ),
  on(actions.EditGroup, (state: GroupsState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(actions.EditGroupSuccess, (state: GroupsState, { group_id, group }) => {
    const entities = {
      ...state.groupEntities,
      [group_id]: group,
    };

    return {
      ...state,
      groupEntities: entities,
      loading: false,
    };
  }),
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
