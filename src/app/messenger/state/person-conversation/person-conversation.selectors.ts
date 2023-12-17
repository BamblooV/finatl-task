import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ConversationDialogState } from '../../types';
import { adapter } from './person-conversation.action';

const { selectEntities } = adapter.getSelectors();

export const selectConversationDialogState = createFeatureSelector<ConversationDialogState>('conversationDialog');

export const selectConversations = createSelector(selectConversationDialogState, selectEntities);

export const selectConversationMessages = (conversationID: string) =>
  createSelector(selectConversations, entities => entities[conversationID]?.messages || []);

export const selectLastFetchTimeById = (conversationID: string) =>
  createSelector(selectConversations, entities => entities[conversationID]?.lastFetchTime || null);
export const selectLastUpdateTime = createSelector(selectConversationDialogState, state => state.lastUpdateTime);
export const selectLoading = createSelector(selectConversationDialogState, state => state.loading);
export const selectError = createSelector(selectConversationDialogState, state => state.error);
