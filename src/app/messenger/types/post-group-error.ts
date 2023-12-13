import { ErrorResponse } from '@core/types';

export type PostGroupErrorTypes =
  | 'InvalidUserDataException'
  | 'InvalidTokenException'
  | 'InvalidFormDataException'
  | 'InvalidFormDataException'
  | 'InvalidFormDataException';

export type PostGroupErrorResponse = ErrorResponse<PostGroupErrorTypes>;
