import { createAction, props } from '@ngrx/store';

import {
  LoginCredentials,
  SignupErrorResponse,
  LoginErrorResponse,
  User,
  UserCredentials,
  LogoutErrorResponse,
} from '../types';

export const registerUser = createAction('[Signup Page] Send form', props<{ credentials: UserCredentials }>());
export const registerUserSuccess = createAction('[Auth API] Registration success', props<{ message: string }>());
export const registerUserFailure = createAction(
  '[Auth API] Registration failure',
  props<{ response: SignupErrorResponse }>()
);

export const loginUser = createAction('[Login Page] Send form', props<{ credentials: LoginCredentials }>());
export const loginUserSuccess = createAction('[Auth API] Log in success', props<{ user: User; message: string }>());
export const loginUserFailure = createAction('[Auth API] Log in failure', props<{ response: LoginErrorResponse }>());

export const logout = createAction('[AUTH  API] Logout');
export const logoutSuccess = createAction('[AUTH  API] Logout success', props<{ message: string }>());
export const logoutFailure = createAction('[AUTH  API] Logout failure', props<{ response: LogoutErrorResponse }>());
