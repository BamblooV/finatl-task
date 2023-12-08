import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthApiService } from '../services/auth-api.service';
import { AuthActions } from '.';

@Injectable()
export class AuthEffects {
  registerUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.registerUser),
      exhaustMap(action =>
        this.authService.registerUser(action.credentials).pipe(
          map(() => AuthActions.registerUserSuccess({ message: 'User successfully registered' })),
          catchError(error => of(AuthActions.registerUserFailure({ response: error })))
        )
      )
    );
  });

  registerSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.registerUserSuccess),
        tap(() => {
          this.router.navigateByUrl('auth/login');
        })
      );
    },
    { dispatch: false }
  );

  loginUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginUser),
      exhaustMap(action =>
        this.authService.loginUser(action.credentials).pipe(
          map(user => AuthActions.loginUserSuccess({ user, message: 'You successfully logged in. Welcome!' })),
          catchError(error => of(AuthActions.loginUserFailure({ response: error })))
        )
      )
    );
  });

  loginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginUserSuccess),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      );
    },
    { dispatch: false }
  );

  showSuccessNotification$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.registerUserSuccess, AuthActions.loginUserSuccess),
        tap(action => {
          this.toast.add({ severity: 'success', summary: 'Success', detail: action.message });
        })
      );
    },
    { dispatch: false }
  );

  showFailureNotification$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.registerUserFailure, AuthActions.loginUserFailure),
        tap(action => {
          this.toast.add({ severity: 'error', summary: 'Failed to register', detail: action.response.message });
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthApiService,
    private readonly toast: MessageService,
    private readonly router: Router
  ) {}
}
