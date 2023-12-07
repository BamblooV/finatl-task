import { AuthState } from '../../auth/types';
import { UserInfoState } from '../../user/types';

export interface RootState {
  auth: AuthState;
  user: UserInfoState;
}
