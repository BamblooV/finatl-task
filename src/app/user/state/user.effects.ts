import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { UserInfoApiService } from '../services/user-info-api.service';
import { UserInfoActions } from '.';

@Injectable()
export class UserInfoEffects {
  fetchUserInfo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserInfoActions.fetchUserInfo),
      exhaustMap(() =>
        this.userInfo.fetchUserInfo().pipe(
          map(userInfo => {
            return UserInfoActions.fetchUserInfoSuccess({ userInfo, message: 'Profile info successfully loaded' });
          }),
          catchError(error => of(UserInfoActions.fetchUserInfoFailure({ response: error })))
        )
      )
    );
  });

  updateUserName = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserInfoActions.updateUserName),
      exhaustMap(action =>
        this.userInfo.updateUserName(action.name).pipe(
          map(() => {
            return UserInfoActions.updateUserNameSuccess({
              name: action.name,
              message: 'Profile info successfully updated',
            });
          }),
          catchError(error => of(UserInfoActions.updateUserNameFailure({ response: error })))
        )
      )
    );
  });

  showSuccessNotification$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(UserInfoActions.fetchUserInfoSuccess, UserInfoActions.updateUserNameSuccess),
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
        ofType(UserInfoActions.fetchUserInfoFailure, UserInfoActions.updateUserNameFailure),
        tap(action => {
          this.toast.add({ severity: 'error', summary: 'Failed to register', detail: action.response.message });
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly userInfo: UserInfoApiService,
    private readonly toast: MessageService
  ) {}
}
