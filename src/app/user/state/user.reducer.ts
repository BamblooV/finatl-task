import { createReducer, on } from '@ngrx/store';
import { UserInfoState } from '../types/user-info-state.model';
import { UserInfoActions } from '.';
import { UserInfo } from '../types';

export const initialState: UserInfoState = {
  userInfo: null,
  error: null,
  loading: false,
};

export const userInfoReducer = createReducer(
  initialState,
  on(
    UserInfoActions.fetchUserInfo,
    UserInfoActions.updateUserName,
    (state): UserInfoState => ({
      ...state,
      loading: true,
    })
  ),
  on(
    UserInfoActions.fetchUserInfoSuccess,
    (state, { userInfo }): UserInfoState => ({
      userInfo,
      error: null,
      loading: false,
    })
  ),
  on(
    UserInfoActions.fetchUserInfoFailure,
    (state, { response }): UserInfoState => ({
      userInfo: null,
      error: response,
      loading: false,
    })
  ),
  on(
    UserInfoActions.updateUserNameSuccess,
    (state, { name }): UserInfoState => ({
      userInfo: {
        // Bad explicit type cast. For now, there is no cases for update user name without fetch user data
        ...(state.userInfo as UserInfo),
        name,
      },
      loading: false,
      error: null,
    })
  )
);
