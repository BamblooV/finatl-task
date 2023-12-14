import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from '../../types';

export const selectUsersState = createFeatureSelector<UsersState>('users');

export const selectUsersLoading = createSelector(selectUsersState, (state: UsersState) => state.loading);
export const selectUsersError = createSelector(selectUsersState, (state: UsersState) => state.error);

export const selectUsersCount = createSelector(selectUsersState, (state: UsersState) => state.count);
export const selectUsersLastFetchTime = createSelector(selectUsersState, (state: UsersState) => state.lastFetchTime);
export const selectUsers = createSelector(selectUsersState, (state: UsersState) => state.users);

export const selectUsersAndCount = createSelector(
  selectUsers,
  selectUsersCount,
  (users, count): [UsersState['users'], number] => [users, count]
);
