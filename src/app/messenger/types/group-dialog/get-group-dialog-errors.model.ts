import { ErrorResponse } from '@core/types';

export type GetGroupsDialogErrorTypes =
  | 'InvalidUserDataException'
  | 'InvalidTokenException'
  | 'InvalidFormDataException'
  | 'InvalidIDException';

export type GetGroupsDialogErrorResponse = ErrorResponse<GetGroupsDialogErrorTypes>;
