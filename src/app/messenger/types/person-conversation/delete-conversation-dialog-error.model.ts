import { ErrorResponse } from '@core/types';

export type DeleteConversationDialogErrorTypes =
  | 'InvalidUserDataException'
  | 'InvalidTokenException'
  | 'InvalidFormDataException'
  | 'InvalidIDException';

export type DeleteConversationDialogErrorResponse = ErrorResponse<DeleteConversationDialogErrorTypes>;
