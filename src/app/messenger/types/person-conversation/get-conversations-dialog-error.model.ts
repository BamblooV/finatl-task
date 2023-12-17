import { ErrorResponse } from '@core/types';

export type GetConversationsDialogErrorTypes =
  | 'InvalidUserDataException'
  | 'InvalidTokenException'
  | 'InvalidFormDataException'
  | 'InvalidIDException';

export type GetConversationsDialogErrorResponse = ErrorResponse<GetConversationsDialogErrorTypes>;
