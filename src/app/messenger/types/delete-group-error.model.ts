import { ErrorResponse } from '@core/types';

export type DeleteGroupErrorTypes =
  | 'InvalidUserDataException'
  | 'InvalidTokenException'
  | 'InvalidFormDataException'
  | 'InvalidIDException';

export type DeleteGroupErrorResponse = ErrorResponse<DeleteGroupErrorTypes>;
