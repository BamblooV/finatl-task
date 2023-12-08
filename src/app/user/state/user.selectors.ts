import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserInfoState } from '../types/user-info-state.model';

export const selectUserInfoState = createFeatureSelector<UserInfoState>('user');

export const selectUserInfo = createSelector(selectUserInfoState, (state: UserInfoState) => state.userInfo);
export const selectUserInfoError = createSelector(selectUserInfoState, (state: UserInfoState) => state.error);
export const selectUserInfoLoading = createSelector(selectUserInfoState, (state: UserInfoState) => state.loading);
