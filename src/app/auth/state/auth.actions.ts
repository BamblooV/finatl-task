import { createAction, props } from '@ngrx/store';

import { ErrorResponse } from '@core/types';
import { LoginCredentials, User, UserCredentials } from '../types';

export const registerUser = createAction('[Signup Page] Send form', props<{ credentials: UserCredentials }>());
export const registerUserSuccess = createAction('[Auth API] Registration success', props<{ message: string }>());
export const registerUserFailure = createAction(
  '[Auth API] Registration failure',
  props<{ response: ErrorResponse }>()
);

export const loginUser = createAction('[Login Page] Send form', props<{ credentials: LoginCredentials }>());
export const loginUserSuccess = createAction('[Auth API] Log in success', props<{ user: User; message: string }>());
export const loginUserFailure = createAction('[Auth API] Log in failure', props<{ response: ErrorResponse }>());

export const logout = createAction('[AUTH] Logout');
