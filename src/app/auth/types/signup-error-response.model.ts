import { ErrorResponse } from '@core/types';

export type SignupErrorTypes =
  | 'InvalidFormDataException'
  | 'InvalidFormDataException'
  | 'InvalidFormDataException'
  | 'PrimaryDuplicationException';

export type SignupErrorResponse = ErrorResponse<SignupErrorTypes>;
