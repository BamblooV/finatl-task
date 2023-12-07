import { createReducer, on } from '@ngrx/store';

import { AuthActions } from './index';
import { AuthState } from '../types';

export const initialState: AuthState = {
  currentUser: null,
  error: null,
  loading: false,
};

export const authReducer = createReducer(
  initialState,
  on(
    AuthActions.registerUser,
    (state): AuthState => ({
      ...state,
      loading: true,
    })
  ),
  on(
    AuthActions.registerUserSuccess,
    (state): AuthState => ({
      ...state,
      loading: false,
      error: null,
    })
  ),
  on(
    AuthActions.registerUserFailure,
    (state, { response }): AuthState => ({
      ...state,
      loading: false,
      error: response,
    })
  )
);
