import { EntityState } from '@ngrx/entity';
import { Message } from '../message.model';
import { GetGroupsDialogErrorResponse } from './get-group-dialog-errors.model';
import { PostGroupDialogMessageErrorResponse } from './post-group-dialog-message-error.model';

export interface GroupDialogState extends EntityState<GroupMessages> {
  loading: boolean;
  error: null | GetGroupsDialogErrorResponse | PostGroupDialogMessageErrorResponse;
  lastUpdateTime: ReturnType<typeof Date.now> | null;
}

export type GroupMessages = {
  id: string;
  messages: Message[];
  lastFetchTime: ReturnType<typeof Date.now> | null;
};
