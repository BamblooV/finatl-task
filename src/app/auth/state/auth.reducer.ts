import { ActionReducer, createReducer, on } from '@ngrx/store';

import { AuthActions } from './index';
import { AuthState } from '../types';
import { RootState } from '../../reducers/types';

export const initialState: AuthState = {
  currentUser: null,
  error: null,
  loading: false,
};

let storedState: AuthState | null = null;

try {
  const storedValue = localStorage.getItem('auth');
  if (storedValue) {
    storedState = JSON.parse(storedValue);
  }
} catch (error) {
  console.error('Failed to init stored state');
  localStorage.removeItem('auth');
}

export const authReducer = createReducer(
  storedState ?? initialState,
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
    const nextState = reducer(state, action);
    localStorage.setItem('auth', JSON.stringify(nextState.auth));
    return nextState;
  };
};
