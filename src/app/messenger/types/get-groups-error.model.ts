import { ErrorResponse } from '@core/types';

export type GetGroupsErrorTypes = 'InvalidUserDataException' | 'InvalidTokenException';

export type GetGroupsErrorResponse = ErrorResponse<GetGroupsErrorTypes>;
