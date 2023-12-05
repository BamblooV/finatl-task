import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../types';

export const selectAuth = createFeatureSelector<AuthState>('auth');

export const selectAuthLoading = createSelector(selectAuth, (state: AuthState) => state.loading);
export const selectAuthError = createSelector(selectAuth, (state: AuthState) => state.error);
export const selectAuthErrorEmail = createSelector(
  selectAuth,
  (state: AuthState) => state.error?.message.split(' ')?.[1]
);
