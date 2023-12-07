import { User } from './user.model';
import { SignupErrorResponse } from './signup-error-response.model';

export type AuthState = {
  currentUser: User | null;
  error: SignupErrorResponse | null;
  loading: boolean;
};
