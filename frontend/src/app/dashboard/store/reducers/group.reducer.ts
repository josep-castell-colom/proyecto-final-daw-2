import { Action, createReducer, on } from '@ngrx/store';
import { initialState, GroupState } from '../state/group.state';
import * as actions from '../actions/group.actions';

export const groupReducer = createReducer(
  initialState,
  on(actions.PostComment, (state: GroupState) => {
    return {
      ...state,
      loadingComments: true,
    };
  }),
  on(
    actions.PostCommentSuccess,
    (state: GroupState, { comment, sectionId }) => {
      const group = state.group;
      const section = group.sections.find(
        (section) => section.id === sectionId
      );
      let newGroup = group;
      if (section) {
        const post = section.posts.find((post) => post.id === comment.post.id);
        if (post) {
          const newPost = {
            ...post,
            comments: [...post.comments, comment],
          };
          const newPostCollection = section.posts.map((post) => {
            if (post.id === newPost.id) return newPost;
            return post;
          });
          const newSection = {
            ...section,
            posts: newPostCollection,
          };
          const newSectionsCollection = group.sections.map((section) => {
            if (section.id === sectionId) return newSection;
            return section;
          });
          newGroup = {
            ...group,
            sections: newSectionsCollection,
          };
        }
      }
      return {
        ...state,
        group: newGroup,
        loadingComments: false,
      };
    }
  )
);

export function GroupReducer(state: GroupState, action: Action) {
  return groupReducer(state, action);
}
