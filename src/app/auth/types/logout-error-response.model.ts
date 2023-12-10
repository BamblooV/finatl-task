import { ErrorResponse } from '@core/types';

export type LogoutErrorTypes = 'InvalidUserDataException' | 'InvalidTokenException' | 'InvalidTokenException';

export type LogoutErrorResponse = ErrorResponse<LogoutErrorTypes>;
