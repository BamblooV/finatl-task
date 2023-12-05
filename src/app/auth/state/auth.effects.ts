import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { MessageService } from 'primeng/api';
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

  showSuccessNotification$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.registerUserSuccess),
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
        ofType(AuthActions.registerUserFailure),
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
    private readonly toast: MessageService
  ) {}
}
