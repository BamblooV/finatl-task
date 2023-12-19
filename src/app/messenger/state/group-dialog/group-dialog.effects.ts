import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { GroupApiService } from '../../services/group-api.service';
import { GroupDialogActions, GroupDialogSelectors } from '.';

@Injectable()
export class GroupDialogEffects {
  fetchMessages = createEffect(() => {
    return this.actions$.pipe(
      ofType(GroupDialogActions.fetchMessages),
      switchMap(action => {
        return this.store.select(GroupDialogSelectors.selectGroupMessages(action.groupID)).pipe(
          concatLatestFrom(() => this.store.select(GroupDialogSelectors.selectLastFetchTimeById(action.groupID))),
          switchMap(([groupMessages, lastFetchTime]) => {
            if (groupMessages.length !== 0) {
              return of(
                GroupDialogActions.fetchMessagesSuccess({
                  groupID: action.groupID,
                  messages: groupMessages,
                  message: '',
                })
              );
            }

            return this.groupApi.getMessages(action.groupID, lastFetchTime).pipe(
              map(({ messages }) => {
                return GroupDialogActions.fetchMessagesSuccess({
                  groupID: action.groupID,
                  messages,
                  message: 'Fetch group messages success',
                });
              }),
              catchError(error => of(GroupDialogActions.fetchMessagesFailure({ response: error })))
            );
          })
        );
      })
    );
  });

  updateMessages = createEffect(() => {
    return this.actions$.pipe(
      ofType(GroupDialogActions.updateMessages),
      concatLatestFrom(action => this.store.select(GroupDialogSelectors.selectLastFetchTimeById(action.groupID))),
      exhaustMap(([action, lastUpdateTime]) => {
        return this.groupApi.getMessages(action.groupID, lastUpdateTime).pipe(
          map(({ messages }) => {
            return GroupDialogActions.updateMessagesSuccess({
              groupID: action.groupID,
              messages,
              message: 'Update group messages success',
            });
          }),
          catchError(error => of(GroupDialogActions.updateMessagesFailure({ response: error })))
        );
      })
    );
  });

  sendMessage = createEffect(() => {
    return this.actions$.pipe(
      ofType(GroupDialogActions.sendMessage),
      exhaustMap(action => {
        return this.groupApi.postMessage(action.groupID, action.message).pipe(
          map(() => GroupDialogActions.sendMessageSuccess({ groupID: action.groupID })),
          catchError(error => of(GroupDialogActions.sendMessageFailure({ response: error })))
        );
      })
    );
  });

  loadAfterSend = createEffect(() => {
    return this.actions$.pipe(
      ofType(GroupDialogActions.sendMessageSuccess),
      concatLatestFrom(action => this.store.select(GroupDialogSelectors.selectLastFetchTimeById(action.groupID))),
      exhaustMap(([action, lastFetchTime]) =>
        this.groupApi.getMessages(action.groupID, lastFetchTime).pipe(
          map(({ messages }) => {
            return GroupDialogActions.loadMoreAfterPost({
              groupID: action.groupID,
              messages,
              message: null,
            });
          }),
          catchError(error => of(GroupDialogActions.updateMessagesFailure({ response: error })))
        )
      )
    );
  });

  showSuccessNotification$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(GroupDialogActions.fetchMessagesSuccess, GroupDialogActions.updateMessagesSuccess),
        tap(action => {
          if (action.message) {
            this.toast.add({ severity: 'success', summary: 'Success', detail: action.message });
          }
        })
      );
    },
    { dispatch: false }
  );

  showFailureNotification$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          GroupDialogActions.fetchMessagesFailure,
          GroupDialogActions.updateMessagesFailure,
          GroupDialogActions.sendMessageFailure
        ),
        tap(action => {
          this.toast.add({ severity: 'error', summary: 'Failed to register', detail: action.response.message });
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly groupApi: GroupApiService,
    private readonly toast: MessageService,
    private readonly store: Store
  ) {}
}
