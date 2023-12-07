import { User } from './user.model';
import { LoginErrorResponse } from './login-error-response.model';
import { SignupErrorResponse } from './signup-error-response.model';

export type AuthState = {
  currentUser: User | null;
  error: SignupErrorResponse | LoginErrorResponse | null;
  loading: boolean;
};
