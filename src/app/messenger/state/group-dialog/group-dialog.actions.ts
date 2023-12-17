import { createAction, props } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { GetGroupsDialogErrorResponse, GroupMessages, Message } from '../../types';
import { PostGroupDialogMessageErrorResponse } from '../../types/group-dialog/post-group-dialog-message-error.model';

export const adapter: EntityAdapter<GroupMessages> = createEntityAdapter<GroupMessages>();

export const fetchMessages = createAction('[Group Chat] Fetch group messages', props<{ groupID: string }>());
export const fetchMessagesSuccess = createAction(
  '[Group Api] Fetch group messages success',
  props<{ groupID: string; messages: Message[]; message: string | null }>()
);
export const fetchMessagesFailure = createAction(
  '[Group Api] Fetch group messages failure',
  props<{ response: GetGroupsDialogErrorResponse }>()
);

export const updateMessages = createAction('[Group Chat] Update group messages', props<{ groupID: string }>());
export const updateMessagesSuccess = createAction(
  '[Group Api] Update group messages success',
  props<{ groupID: string; messages: Message[]; message: string | null }>()
);
export const updateMessagesFailure = createAction(
  '[Group Api] Update group messages failure',
  props<{ response: GetGroupsDialogErrorResponse }>()
);

export const sendMessage = createAction(
  '[Group Chat] Send group messages',
  props<{ groupID: string; message: string }>()
);
export const sendMessageSuccess = createAction(
  '[Group Dialog Api] Send group messages success',
  props<{ groupID: string }>()
);
export const sendMessageFailure = createAction(
  '[Group Dialog Api] Send group messages failure',
  props<{ response: PostGroupDialogMessageErrorResponse }>()
);

export const loadMoreAfterPost = createAction(
  '[Group Dialog Effect] Load message after post success',
  props<{ groupID: string; messages: Message[]; message: string | null }>()
);
