import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthEffects } from './auth.effects';
import * as fromState from './auth.state';

export const FEATURE_KEY = 'auth';

export const getAuthState =
  createFeatureSelector<fromState.AuthState>(FEATURE_KEY);

export const getAuthUser = createSelector(getAuthState, fromState.getUser);

export const getAuthToken = createSelector(getAuthState, fromState.getToken);

export const getAuthLoading = createSelector(
  getAuthState,
  fromState.getLoading
);

export const getAuthLoggedIn = createSelector(
  getAuthState,
  fromState.getLoggedIn
);

export * from './auth.actions';
export const effects: any[] = [AuthEffects];
export * from './auth.reducer';
