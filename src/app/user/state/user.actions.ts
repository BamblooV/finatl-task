import { createAction, props } from '@ngrx/store';
import { UserInfo, UserInfoError } from '../types';

export const fetchUserInfo = createAction('[UserInfo API] Fetch user info');
export const fetchUserInfoSuccess = createAction(
  '[UserInfo API] Fetch user info success',
  props<{ userInfo: UserInfo; message: string }>()
);
export const fetchUserInfoFailure = createAction(
  '[UserInfo API] Fetch user info failure',
  props<{ response: UserInfoError }>()
);
