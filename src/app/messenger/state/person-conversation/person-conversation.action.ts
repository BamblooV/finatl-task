import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import {
  ConversationMessages,
  DeleteConversationDialogErrorResponse,
  GetConversationsDialogErrorResponse,
  Message,
  PostConversationDialogMessageErrorResponse,
} from '../../types';

export const adapter: EntityAdapter<ConversationMessages> = createEntityAdapter<ConversationMessages>();

export const fetchMessages = createAction(
  '[Conversation Chat] Fetch group messages',
  props<{ conversationID: string }>()
);
export const fetchMessagesSuccess = createAction(
  '[Conversation API] Fetch group messages success',
  props<{ conversationID: string; messages: Message[]; message: string | null }>()
);
export const fetchMessagesFailure = createAction(
  '[Conversation API] Fetch group messages failure',
  props<{ response: GetConversationsDialogErrorResponse }>()
);

export const updateMessages = createAction(
  '[Conversation Chat] Update group messages',
  props<{ conversationID: string }>()
);
export const updateMessagesSuccess = createAction(
  '[Conversation API] Update group messages success',
  props<{ conversationID: string; messages: Message[]; message: string | null }>()
);
export const updateMessagesFailure = createAction(
  '[Conversation API] Update group messages failure',
  props<{ response: GetConversationsDialogErrorResponse }>()
);

export const sendMessage = createAction(
  '[Conversation Chat] Send messages',
  props<{ conversationID: string; message: string }>()
);
export const sendMessageSuccess = createAction(
  '[Conversation API] Send messages success',
  props<{ conversationID: string }>()
);
export const sendMessageFailure = createAction(
  '[Conversation API] Send messages failure',
  props<{ response: PostConversationDialogMessageErrorResponse }>()
);

export const loadMoreAfterPost = createAction(
  '[Conversation Effect] Load message after post success',
  props<{ conversationID: string; messages: Message[]; message: string | null }>()
);

export const deleteConversation = createAction(
  '[Conversation Chat] Delete conversation',
  props<{ conversationID: string }>()
);
export const deleteConversationSuccess = createAction(
  '[Conversation API] Delete conversation success',
  props<{ conversationID: string }>()
);
export const deleteConversationFailure = createAction(
  '[Conversation API] Delete conversation failure',
  props<{ response: DeleteConversationDialogErrorResponse }>()
);
