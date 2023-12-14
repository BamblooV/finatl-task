import { ErrorResponse } from '@core/types';

export type GetPersonsErrorTypes = 'InvalidUserDataException' | 'InvalidTokenException';

export type GetPersonsErrorResponse = ErrorResponse<GetPersonsErrorTypes>;
