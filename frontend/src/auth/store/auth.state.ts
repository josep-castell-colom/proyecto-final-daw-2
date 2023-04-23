import { User } from 'src/app/models/user.interface';

export interface AuthState {
  user: User | undefined;
  authToken: string | undefined;
  loggedIn: boolean;
  loading: boolean;
}

export const AUTH_FEATURE_KEY = 'Auth';

export const initialState: AuthState = {
  user: undefined,
  authToken: 'hola',
  loggedIn: false,
  loading: false,
};

export const getUser = (state: AuthState) => state.user;
export const getToken = (state: AuthState) => state.authToken;
export const getLoggedIn = (state: AuthState) => state.loggedIn;
export const getLoading = (state: AuthState) => state.loading;
