import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GroupDialogState } from '../../types';
import { adapter } from './group-dialog.actions';

const { selectEntities } = adapter.getSelectors();

export const selectGroupDialogState = createFeatureSelector<GroupDialogState>('groupDialog');

export const selectGroups = createSelector(selectGroupDialogState, selectEntities);

export const selectGroupMessages = (groupID: string) =>
  createSelector(selectGroups, entities => entities[groupID]?.messages || []);

export const selectLastFetchTimeById = (groupID: string) =>
  createSelector(selectGroups, entities => entities[groupID]?.lastFetchTime || null);

export const selectLastUpdateTime = createSelector(
  selectGroupDialogState,
  (state: GroupDialogState) => state.lastUpdateTime
);
export const selectLoading = createSelector(selectGroupDialogState, (state: GroupDialogState) => state.loading);
export const selectError = createSelector(selectGroupDialogState, (state: GroupDialogState) => state.error);
