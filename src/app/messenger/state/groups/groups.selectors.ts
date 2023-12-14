import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GroupsState } from '../../types';

export const selectGroupsState = createFeatureSelector<GroupsState>('groups');

export const selectGroupsLoading = createSelector(selectGroupsState, (state: GroupsState) => state.loading);
export const selectGroupsError = createSelector(selectGroupsState, (state: GroupsState) => state.error);

export const selectGroupsCount = createSelector(selectGroupsState, (state: GroupsState) => state.count);
export const selectGroupsLastFetchTime = createSelector(selectGroupsState, (state: GroupsState) => state.lastFetchTime);
export const selectGroups = createSelector(selectGroupsState, (state: GroupsState) => state.groups);

export const selectGroupsAndCount = createSelector(
  selectGroups,
  selectGroupsCount,
  (groups, count): [GroupsState['groups'], number] => [groups, count]
);
