import { createReducer, on } from '@ngrx/store';

import { AuthActions } from './index';
import { User } from '../types';

export type AuthState = {
  currentUser: User | null;
  error: string | null;
  loading: boolean;
};

export const initialState: AuthState = {
  currentUser: null,
  error: null,
  loading: false,
};

export const authReducer = createReducer(initialState);
