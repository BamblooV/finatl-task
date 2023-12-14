import { createAction, props } from '@ngrx/store';
import { GetPersonsErrorResponse, Person, PostConversationErrorResponse } from '../../types';

export const fetchUsers = createAction('[Users List Component] Fetch users');
export const fetchUsersSuccess = createAction(
  '[Chats API] Fetch users success',
  props<{ count: number; users: Person[]; message: string }>()
);
export const fetchUsersFailure = createAction(
  '[Chats API] Fetch users failure',
  props<{ response: GetPersonsErrorResponse }>()
);

export const updateUsers = createAction('[Users List Component] Update users');
export const updateUsersSuccess = createAction(
  '[Chats API] Update users success',
  props<{ count: number; users: Person[]; message: string }>()
);
export const updateUsersFailure = createAction(
  '[Chats API] Update users failure',
  props<{ response: GetPersonsErrorResponse }>()
);

export const createConversation = createAction(
  '[Users List Component] Create conversations',
  props<{ companion: string }>()
);
export const createConversationSuccess = createAction(
  '[Chats API] Create conversations success',
  props<{ conversationID: string; companionID: string; message: string }>()
);
export const createConversationFailure = createAction(
  '[Chats API] Create conversations failure',
  props<{ response: PostConversationErrorResponse }>()
);
