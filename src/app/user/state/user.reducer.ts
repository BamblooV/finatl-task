import { createReducer, on } from '@ngrx/store';
import { UserInfoState } from '../types/user-info-state.model';
import { UserInfoActions } from '.';

export const initialState: UserInfoState = {
  userInfo: null,
  error: null,
  loading: false,
};

export const userInfoReducer = createReducer(
  initialState,
  on(
    UserInfoActions.fetchUserInfo,
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
  )
);
