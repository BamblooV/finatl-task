import { createAction, props } from '@ngrx/store';
import { DeleteGroupErrorResponse, GetGroupsErrorResponse, Group, PostGroupErrorResponse } from '../../types';

export const fetchGroups = createAction('[Groups List Component] Fetch groups');
export const fetchGroupsSuccess = createAction(
  '[Chats API] Fetch groups success',
  props<{ groups: Group[]; count: number; message: string }>()
);
export const fetchGroupsFailure = createAction(
  '[Chats API] Fetch groups failure',
  props<{ response: GetGroupsErrorResponse }>()
);

export const updateGroups = createAction('[Groups List Component] Update groups');
export const updateGroupsSuccess = createAction(
  '[Chats API] Update groups success',
  props<{ groups: Group[]; count: number; message: string }>()
);
export const updateGroupsFailure = createAction(
  '[Chats API] Update groups failure',
  props<{ response: GetGroupsErrorResponse }>()
);

export const createGroup = createAction('[Groups modal] Group create form submit', props<{ name: string }>());
export const createGroupSuccess = createAction(
  '[Chats API] Group create success',
  props<{ name: string; groupID: string; createdBy: string; message: string }>()
);
export const createGroupFailure = createAction(
  '[Chats API] Group create failure',
  props<{ response: PostGroupErrorResponse }>()
);

export const deleteGroup = createAction('[Groups list] Delete group', props<{ groupID: string }>());
export const deleteGroupSuccess = createAction(
  '[Chats API] Delete group success',
  props<{ groupID: string; message: string }>()
);
export const deleteGroupFailure = createAction(
  '[Chats API] Delete group failure',
  props<{ response: DeleteGroupErrorResponse }>()
);
