/* eslint-disable @typescript-eslint/no-empty-interface */
import { isDevMode } from '@angular/core';
import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { authHydrationMetaReducer, authReducer } from '../auth/state/auth.reducer';
import { AuthState } from '../auth/types';
import { RootState } from './types';
import { userInfoReducer } from '../user/state/user.reducer';

export const reducers: ActionReducerMap<RootState> = {
  auth: authReducer,
  user: userInfoReducer,
};

export const metaReducers: MetaReducer<RootState>[] = isDevMode()
  ? [authHydrationMetaReducer]
  : [authHydrationMetaReducer];
