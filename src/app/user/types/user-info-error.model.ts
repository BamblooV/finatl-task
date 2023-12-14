import { ErrorResponse } from '@core/types';

export type UserInfoErrorTypes = 'InvalidUserDataException' | 'InvalidTokenException' | 'InvalidIDException';

export type UserInfoError = ErrorResponse<UserInfoErrorTypes>;
