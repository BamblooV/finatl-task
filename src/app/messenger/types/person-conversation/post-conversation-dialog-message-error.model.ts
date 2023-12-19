import { ErrorResponse } from '@core/types';

export type PostConversationDialogMessageErrorTypes =
  | 'InvalidUserDataException'
  | 'InvalidTokenException'
  | 'InvalidFormDataException'
  | 'InvalidFormDataException'
  | 'InvalidPostData'
  | 'RoomReadyException'
  | 'InvalidIDException';

export type PostConversationDialogMessageErrorResponse = ErrorResponse<PostConversationDialogMessageErrorTypes>;
