import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ChatsApiService } from '../../services/chats-api.service';
import { UsersActions } from '.';

@Injectable()
export class UsersEffects {
  fetchUsers = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.fetchUsers),
      exhaustMap(() =>
        this.chatsApi.fetchUsers().pipe(
          map(({ count, users }) =>
            UsersActions.fetchUsersSuccess({ count, users, message: 'User successfully fetched' })
          ),
          catchError(error => of(UsersActions.fetchUsersFailure({ response: error })))
        )
      )
    );
  });

  updateUsers = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.updateUsers),
      exhaustMap(() =>
        this.chatsApi.updateUsers().pipe(
          map(({ count, users }) =>
            UsersActions.updateUsersSuccess({ count, users, message: 'User successfully fetched' })
          ),
          catchError(error => of(UsersActions.updateUsersFailure({ response: error })))
        )
      )
    );
  });

  createConversation = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.createConversation),
      exhaustMap(({ companion }) =>
        this.chatsApi.createConversation(companion).pipe(
          map(({ conversationID }) =>
            UsersActions.createConversationSuccess({
              companionID: companion,
              conversationID,
              message: 'Conversation created successfully',
            })
          ),
          tap(action => {
            this.router.navigate(['conversation', action.conversationID]);
          }),
          catchError(error => of(UsersActions.createConversationFailure({ response: error })))
        )
      )
    );
  });

  showSuccessNotification$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(UsersActions.fetchUsersSuccess, UsersActions.createConversationSuccess, UsersActions.updateUsersSuccess),
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
        ofType(UsersActions.fetchUsersFailure, UsersActions.createConversationFailure, UsersActions.updateUsersFailure),
        tap(action => {
          this.toast.add({ severity: 'error', summary: 'Failed to register', detail: action.response.message });
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly chatsApi: ChatsApiService,
    private readonly toast: MessageService,
    private readonly store: Store,
    private readonly router: Router
  ) {}
}
