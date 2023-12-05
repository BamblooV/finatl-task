import { ErrorResponse } from '@core/types';
import { User } from './user.model';

export type AuthState = {
  currentUser: User | null;
  error: ErrorResponse | null;
  loading: boolean;
};
