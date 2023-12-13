import { ErrorResponse } from '@core/types';

export type GetConversationsErrorTypes = 'InvalidUserDataException' | 'InvalidTokenException';

export type GetConversationsErrorResponser = ErrorResponse<GetConversationsErrorTypes>;
