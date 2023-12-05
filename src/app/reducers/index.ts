/* eslint-disable @typescript-eslint/no-empty-interface */
import { isDevMode } from '@angular/core';
import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { authReducer, AuthState } from '../auth/state/auth.reducer';

export interface State {
  auth: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
