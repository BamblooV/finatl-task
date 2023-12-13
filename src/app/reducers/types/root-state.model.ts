import { AuthState } from '@auth/types';
import { GroupsState, UsersState } from '@messenger/types';
import { UserInfoState } from '@user/types';

export interface RootState {
  auth: AuthState;
  user: UserInfoState;
  groups: GroupsState;
  users: UsersState;
}
