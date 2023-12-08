import { UserInfoError } from './user-info-error.model';
import { UserInfo } from './user-info.model';

export type UserInfoState = {
  userInfo: UserInfo | null;
  error: UserInfoError | null;
  loading: boolean;
};
