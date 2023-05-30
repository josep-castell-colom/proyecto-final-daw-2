import { Action, createReducer, on } from '@ngrx/store';
import { allGroupsInitialState, GroupsState } from '../state/groups.state';
import * as actions from '../actions/groups.actions';
import { Group, GroupUser, User } from 'src/app/models';

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
      loading: false,
    };

    return {
      ...state,
      groupEntities: entities,
      loading: false,
    };
  }),
  on(actions.DeleteComment, (state: GroupsState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(
    actions.DeleteCommentSuccess,
    (state: GroupsState, { commentId, sectionId, groupId, postId }) => {
      const newGroup: Group = JSON.parse(
        JSON.stringify(state.groupEntities[groupId])
      );
      const section = newGroup.sections.find(
        (section) => section.id === sectionId
      );
      const post = section?.posts.find((post) => post.id === postId);

      const index = post?.comments
        .map((comment) => comment.id)
        .indexOf(commentId);

      if (index) {
        post?.comments.splice(index, 1);
      }

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
  on(actions.DeletePost, (state: GroupsState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(
    actions.DeletePostSuccess,
    (state: GroupsState, { postId, sectionId, groupId }) => {
      let newGroup: Group = JSON.parse(
        JSON.stringify(state.groupEntities[groupId])
      );
      let section = newGroup.sections.find(
        (section) => section.id === sectionId
      );

      const index = section?.posts.map((post) => post.id).indexOf(postId);

      if (index) {
        section?.posts.splice(index, 1);
      }

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
  on(actions.DeleteGroup, (state: GroupsState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(actions.DeleteGroupSuccess, (state: GroupsState, { group_id }) => {
    const { [group_id]: removed, ...entities } = state.groupEntities;

    return {
      ...state,
      groupEntities: entities,
      loading: false,
    };
  }),
  on(actions.FollowGroup, (state: GroupsState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(
    actions.FollowGroupSuccess,
    (state: GroupsState, { group_id, user_id }) => {
      const group = JSON.parse(JSON.stringify(state.groupEntities[group_id]));
      const user = { ...state.userEntities[user_id] };
      const groupUser: GroupUser = {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        instrument: user.instruments,
        pivot: {
          isMember: false,
          isAdmin: false,
        },
      };
      group.users.push(groupUser);

      const authUser = JSON.parse(JSON.stringify(state.userEntities[user_id]));
      authUser.groups.push(group);

      const groupEntities = {
        ...state.groupEntities,
        [group_id]: group,
        loading: false,
      };
      const userEntities = {
        ...state.userEntities,
        [user_id]: authUser,
      };

      return {
        ...state,
        groupEntities,
        userEntities,
        loading: false,
      };
    }
  ),
  on(actions.EditUser, (state: GroupsState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(actions.EditUserSuccess, (state: GroupsState, { user_id, user }) => {
    const entities = {
      ...state.userEntities,
      [user_id]: user,
      loading: false,
    };

    return {
      ...state,
      userEntities: entities,
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
