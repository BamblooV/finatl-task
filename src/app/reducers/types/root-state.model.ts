import { AuthState } from '@auth/types';
import { GroupDialogState, GroupsState, UsersState } from '@messenger/types';
import { UserInfoState } from '@user/types';

export interface RootState {
  auth: AuthState;
  user: UserInfoState;
  groups: GroupsState;
  users: UsersState;
  groupDialog: GroupDialogState;
}
