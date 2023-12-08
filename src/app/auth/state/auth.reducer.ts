import { ActionReducer, createReducer, on } from '@ngrx/store';

import { AuthActions } from './index';
import { AuthState } from '../types';
import { RootState } from '../../reducers/types';

export const initialState: AuthState = {
  currentUser: null,
  email: null,
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
    (): AuthState => ({
      currentUser: null,
      email: null,
      error: null,
      loading: true,
    })
  ),
  on(
    AuthActions.loginUser,
    (state, { credentials }): AuthState => ({
      currentUser: null,
      email: credentials.email,
      error: null,
      loading: true,
    })
  ),
  on(
    AuthActions.registerUserSuccess,
    (state): AuthState => ({
      ...state,
      currentUser: null,
      loading: false,
      error: null,
    })
  ),
  on(
    AuthActions.registerUserFailure,
    AuthActions.loginUserFailure,
    (state, { response }): AuthState => ({
      email: null,
      currentUser: null,
      loading: false,
      error: response,
    })
  ),
  on(
    AuthActions.loginUserSuccess,
    (state, { user }): AuthState => ({
      ...state,
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
