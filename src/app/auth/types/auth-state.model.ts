import { User } from './user.model';
import { LoginErrorResponse } from './login-error-response.model';

export type AuthState = {
  currentUser: User | null;
  error: LoginErrorResponse | null;
  loading: boolean;
};
