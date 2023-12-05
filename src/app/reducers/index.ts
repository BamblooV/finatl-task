/* eslint-disable @typescript-eslint/no-empty-interface */
import { isDevMode } from '@angular/core';
import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { authReducer } from '../auth/state/auth.reducer';
import { AuthState } from '../auth/types';

export interface RootState {
  auth: AuthState;
}

export const reducers: ActionReducerMap<RootState> = {
  auth: authReducer,
};

export const metaReducers: MetaReducer<RootState>[] = isDevMode() ? [] : [];
