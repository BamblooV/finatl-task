import { ErrorResponse } from '@core/types';

export type LoginErrorTypes =
  | 'InvalidFormDataException'
  | 'InvalidFormDataException'
  | 'InvalidFormDataException'
  | 'NotFoundException';

export type LoginErrorResponse = ErrorResponse<LoginErrorTypes>;
