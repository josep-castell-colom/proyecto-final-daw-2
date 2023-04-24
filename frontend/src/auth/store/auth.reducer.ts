import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './auth.actions';
import * as state from './auth.state';

export const reducer = createReducer(
  state.initialState,
  on(actions.Login, (state: state.AuthState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(actions.LoginSuccess, (state: state.AuthState, { user }) => {
    return {
      ...state,
      loggedIn: true,
      loading: false,
      user,
    };
  }),
  on(actions.LoginFail, (state: state.AuthState) => {
    return {
      ...state,
      loggedIn: false,
      loading: false,
    };
  }),
  on(actions.SetAuthToken, (state: state.AuthState, { token }) => {
    return {
      ...state,
      loading: true,
      loggedIn: false,
      authToken: token,
    };
  }),
  on(actions.LogOut, (state: state.AuthState) => {
    return {
      ...state,
      loading: true,
      loggedIn: true,
      authToken: undefined,
      user: undefined,
    };
  })
);

export function AuthReducer(state: state.AuthState, action: Action) {
  return reducer(state, action);
}
