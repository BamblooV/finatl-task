import { ErrorResponse } from '@core/types';

export type PostConversationErrorTypes =
  | 'InvalidUserDataException'
  | 'InvalidTokenException'
  | 'InvalidFormDataException'
  | 'InvalidFormDataException'
  | 'InvalidFormDataException'
  | 'DuplicationNotAllowedException';

export type PostConversationErrorResponse = ErrorResponse<PostConversationErrorTypes>;
