import { createReducer, on } from '@ngrx/store';
import { ConversationDialogState, Message } from '../../types';
import { adapter } from './person-conversation.action';
import { ConversationActions } from '.';

export const initialState: ConversationDialogState = adapter.getInitialState({
  error: null,
  loading: false,
  lastUpdateTime: null,
});

export const conversationDialogReducer = createReducer(
  initialState,
  on(
    ConversationActions.deleteConversation,
    ConversationActions.fetchMessages,
    ConversationActions.sendMessage,
    ConversationActions.updateMessages,
    (state): ConversationDialogState => ({
      ...state,
      loading: true,
      error: null,
    })
  ),
  on(ConversationActions.fetchMessagesSuccess, (state, { messages, conversationID }): ConversationDialogState => {
    return adapter.addOne(
      { id: conversationID, messages, lastFetchTime: Date.now() },
      {
        ...state,
        loading: false,
      }
    );
  }),
  on(ConversationActions.updateMessagesSuccess, (state, { messages, conversationID }): ConversationDialogState => {
    const oldMessages: Message[] = state.entities[conversationID]?.messages
      .flatMap(conversationMessages => conversationMessages)
      .filter(conversationMessages => Boolean(conversationMessages)) as Message[];

    return adapter.setOne(
      {
        id: conversationID,
        messages: [...oldMessages, ...messages],
        lastFetchTime: Date.now() + 1000,
      },
      {
        ...state,
        loading: false,
        lastUpdateTime: Date.now(),
      }
    );
  }),
  on(ConversationActions.loadMoreAfterPost, (state, { messages, conversationID }): ConversationDialogState => {
    const oldMessages: Message[] = state.entities[conversationID]?.messages
      .flatMap(conversationMessages => conversationMessages)
      .filter(conversationMessages => Boolean(conversationMessages)) as Message[];

    return adapter.setOne(
      {
        id: conversationID,
        messages: [...oldMessages, ...messages],
        lastFetchTime: Date.now() + 1000,
      },
      {
        ...state,
        loading: false,
      }
    );
  }),
  on(
    ConversationActions.fetchMessagesFailure,
    ConversationActions.deleteConversationFailure,
    ConversationActions.sendMessageFailure,
    ConversationActions.updateMessagesFailure,
    (state, { response }): ConversationDialogState => ({
      ...state,
      loading: true,
      error: response,
    })
  )
);
