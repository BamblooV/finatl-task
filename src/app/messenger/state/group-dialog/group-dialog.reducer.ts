import { createReducer, on } from '@ngrx/store';
import { GroupDialogState, Message } from '../../types';
import { GroupDialogActions } from '.';
import { adapter } from './group-dialog.actions';

export const initialState: GroupDialogState = adapter.getInitialState({
  error: null,
  loading: false,
  lastUpdateTime: null,
});

export const groupDialogReducer = createReducer(
  initialState,
  on(
    GroupDialogActions.fetchMessages,
    GroupDialogActions.updateMessages,
    GroupDialogActions.sendMessage,
    (state): GroupDialogState => ({
      ...state,
      loading: true,
      error: null,
    })
  ),
  on(GroupDialogActions.fetchMessagesSuccess, (state, { messages, groupID }): GroupDialogState => {
    return adapter.addOne(
      { id: groupID, messages, lastFetchTime: Date.now() },
      {
        ...state,
        loading: false,
      }
    );
  }),
  on(GroupDialogActions.updateMessagesSuccess, (state, { messages, groupID }): GroupDialogState => {
    const oldMessages: Message[] = state.entities[groupID]?.messages
      .flatMap(groupMessages => groupMessages)
      .filter(groupMessages => Boolean(groupMessages)) as Message[];

    return adapter.setOne(
      {
        id: groupID,
        messages: [...oldMessages, ...messages],
        lastFetchTime: Date.now(),
      },
      {
        ...state,
        loading: false,
        lastUpdateTime: Date.now(),
      }
    );
  }),
  on(GroupDialogActions.loadMoreAfterPost, (state, { messages, groupID }): GroupDialogState => {
    const oldMessages: Message[] = state.entities[groupID]?.messages
      .flatMap(groupMessages => groupMessages)
      .filter(groupMessages => Boolean(groupMessages)) as Message[];

    return adapter.setOne(
      {
        id: groupID,
        messages: [...oldMessages, ...messages],
        lastFetchTime: Date.now(),
      },
      {
        ...state,
        loading: false,
      }
    );
  }),
  on(
    GroupDialogActions.fetchMessagesFailure,
    GroupDialogActions.updateMessagesFailure,
    GroupDialogActions.sendMessageFailure,
    (state, { response }): GroupDialogState => {
      return {
        ...state,
        loading: false,
        error: response,
      };
    }
  )
);
