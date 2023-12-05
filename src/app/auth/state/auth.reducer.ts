import { ActionReducer, INIT, UPDATE, createReducer, on } from '@ngrx/store';

import { AuthActions } from './index';
import { AuthState } from '../types';
import { RootState } from '../../reducers/types';

export const initialState: AuthState = {
  currentUser: null,
  error: null,
  loading: false,
};

export const authReducer = createReducer(
  initialState,
  on(
    AuthActions.registerUser,
    AuthActions.loginUser,
    (): AuthState => ({
      currentUser: null,
      error: null,
      loading: true,
    })
  ),
  on(
    AuthActions.registerUserSuccess,
    (): AuthState => ({
      currentUser: null,
      loading: false,
      error: null,
    })
  ),
  on(
    AuthActions.registerUserFailure,
    AuthActions.loginUserFailure,
    (state, { response }): AuthState => ({
      currentUser: null,
      loading: false,
      error: response,
    })
  ),
  on(
    AuthActions.loginUserSuccess,
    (state, { user }): AuthState => ({
      currentUser: user,
      loading: false,
      error: null,
    })
  )
);

export const authHydrationMetaReducer = (reducer: ActionReducer<RootState>): ActionReducer<RootState> => {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem('auth');
      if (storageValue) {
        try {
          const authState = JSON.parse(storageValue);
          return { auth: authState };
        } catch {
          localStorage.removeItem('auth');
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem('auth', JSON.stringify(nextState.auth));
    return nextState;
  };
};
