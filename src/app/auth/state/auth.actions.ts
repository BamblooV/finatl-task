import { createAction, props } from '@ngrx/store';

import { ErrorResponse } from '@core/types';
import { User, UserCredentials } from '../types';

export const registerUser = createAction('[Signup Page] Send form', props<{ credentials: UserCredentials }>());
export const registerUserSuccess = createAction('[Auth API] Registration success', props<{ message: string }>());
export const registerUserFailure = createAction(
  '[Auth API] Registration failure',
  props<{ response: ErrorResponse }>()
);

export const showSuccessRegisterToast = createAction('[Auth API] Register complete', props<{ message: string }>());

export const signin = createAction('[AUTH] Sign in', props<{ user: User }>());
export const logout = createAction('[AUTH] Logout');
