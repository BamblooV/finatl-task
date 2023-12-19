import { ErrorResponse } from '@core/types';

export type PostGroupDialogMessageErrorTypes =
  | 'InvalidUserDataException'
  | 'InvalidTokenException'
  | 'InvalidFormDataException'
  | 'InvalidPostData'
  | 'RoomReadyException'
  | 'InvalidIDException';

export type PostGroupDialogMessageErrorResponse = ErrorResponse<PostGroupDialogMessageErrorTypes>;
