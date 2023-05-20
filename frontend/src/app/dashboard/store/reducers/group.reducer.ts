import { Action, createReducer, on } from '@ngrx/store';
import { allGroupsInitialState, GroupsState } from '../state/groups.state';
import * as actions from '../actions/group.actions';
import { Group } from 'src/app/models';

export const groupReducer = createReducer(
  allGroupsInitialState,
  on(actions.PostComment, (state: GroupsState) => {
    return {
      ...state,
      loadingComments: true,
    };
  }),
  on(
    // TODO fix commentSuccess reducer
    actions.PostCommentSuccess,
    (state: GroupsState, { group, comment, sectionId }) => {
      // const section = group.sections.find(
      //   (section) => section.id === sectionId
      // );
      // console.log('post comment success reducer:::', section);
      // let newGroup = group;
      // if (section) {
      //   const post = section.posts.find((post) => post.id === comment.post.id);
      //   if (post) {
      //     const newPost = {
      //       ...post,
      //       comments: [...post.comments, comment],
      //     };
      //     const newPostCollection = section.posts.map((post) => {
      //       if (post.id === newPost.id) return newPost;
      //       return post;
      //     });
      //     const newSection = {
      //       ...section,
      //       posts: newPostCollection,
      //     };
      //     const newSectionsCollection = group.sections.map((section) => {
      //       if (section.id === sectionId) return newSection;
      //       return section;
      //     });
      //     newGroup = {
      //       ...group,
      //       sections: newSectionsCollection,
      //     };
      //   }
      // }
      const newGroup: Group = JSON.parse(JSON.stringify(group));
      newGroup.sections
        .find((section) => section.id === sectionId)
        ?.posts.find((post) => post.id === comment.post.id)
        ?.comments.push(comment);
      console.log(newGroup);
      return {
        ...state,
        entities: {
          ...state.entities,
          [group.id]: newGroup,
        },
        loadingComments: false,
      };
    }
  )
);

export function GroupReducer(state: GroupsState, action: Action) {
  return groupReducer(state, action);
}
