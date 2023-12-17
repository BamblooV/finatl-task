import { EntityState } from '@ngrx/entity';
import { Message } from '../message.model';
import { GetConversationsDialogErrorResponse } from './get-conversations-dialog-error.model';
import { PostConversationDialogMessageErrorResponse } from './post-conversation-dialog-message-error.model';
import { DeleteConversationDialogErrorResponse } from './delete-conversation-dialog-error.model';

export interface ConversationDialogState extends EntityState<ConversationMessages> {
  loading: boolean;
  error:
    | null
    | GetConversationsDialogErrorResponse
    | PostConversationDialogMessageErrorResponse
    | DeleteConversationDialogErrorResponse;
  lastUpdateTime: ReturnType<typeof Date.now> | null;
}

export type ConversationMessages = {
  id: string;
  messages: Message[];
  lastFetchTime: ReturnType<typeof Date.now> | null;
};
