import { Injectable } from '@angular/core';
import { createEffect, ofType, concatLatestFrom, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { switchMap, of, map, catchError, exhaustMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { PersonConversationApiService } from '../../services/person-conversation-api.service';
import { ConversationActions, ConversationSelectors } from '.';

@Injectable()
export class ConversationEffects {
  fetchMessages = createEffect(() => {
    return this.actions$.pipe(
      ofType(ConversationActions.fetchMessages),
      switchMap(action => {
        return this.store.select(ConversationSelectors.selectConversationMessages(action.conversationID)).pipe(
          concatLatestFrom(() =>
            this.store.select(ConversationSelectors.selectLastFetchTimeById(action.conversationID))
          ),
          switchMap(([groupMessages, lastFetchTime]) => {
            if (groupMessages.length !== 0) {
              return of(
                ConversationActions.fetchMessagesSuccess({
                  conversationID: action.conversationID,
                  messages: groupMessages,
                  message: '',
                })
              );
            }

            return this.conversationApi.getMessages(action.conversationID, lastFetchTime).pipe(
              map(({ messages }) => {
                return ConversationActions.fetchMessagesSuccess({
                  conversationID: action.conversationID,
                  messages,
                  message: 'Fetch group messages success',
                });
              }),
              catchError(error => of(ConversationActions.fetchMessagesFailure({ response: error })))
            );
          })
        );
      })
    );
  });

  updateMessages = createEffect(() => {
    return this.actions$.pipe(
      ofType(ConversationActions.updateMessages),
      concatLatestFrom(action =>
        this.store.select(ConversationSelectors.selectLastFetchTimeById(action.conversationID))
      ),
      exhaustMap(([action, lastUpdateTime]) => {
        return this.conversationApi.getMessages(action.conversationID, lastUpdateTime).pipe(
          map(({ messages }) => {
            return ConversationActions.updateMessagesSuccess({
              conversationID: action.conversationID,
              messages,
              message: 'Update group messages success',
            });
          }),
          catchError(error => of(ConversationActions.updateMessagesFailure({ response: error })))
        );
      })
    );
  });

  sendMessage = createEffect(() => {
    return this.actions$.pipe(
      ofType(ConversationActions.sendMessage),
      exhaustMap(action => {
        return this.conversationApi.postMessage(action.conversationID, action.message).pipe(
          map(() => ConversationActions.sendMessageSuccess({ conversationID: action.conversationID })),
          catchError(error => of(ConversationActions.sendMessageFailure({ response: error })))
        );
      })
    );
  });

  loadAfterSend = createEffect(() => {
    return this.actions$.pipe(
      ofType(ConversationActions.sendMessageSuccess),
      concatLatestFrom(action =>
        this.store.select(ConversationSelectors.selectLastFetchTimeById(action.conversationID))
      ),
      exhaustMap(([action, lastFetchTime]) =>
        this.conversationApi.getMessages(action.conversationID, lastFetchTime).pipe(
          map(({ messages }) => {
            return ConversationActions.loadMoreAfterPost({
              conversationID: action.conversationID,
              messages,
              message: null,
            });
          }),
          catchError(error => of(ConversationActions.updateMessagesFailure({ response: error })))
        )
      )
    );
  });

  deleteConversation = createEffect(() => {
    return this.actions$.pipe(
      ofType(ConversationActions.deleteConversation),
      exhaustMap(action =>
        this.conversationApi.deleteConversation(action.conversationID).pipe(
          map(() => {
            this.router.navigateByUrl('/');
            return ConversationActions.deleteConversationSuccess({ conversationID: action.conversationID });
          }),
          catchError(error => of(ConversationActions.deleteConversationFailure({ response: error })))
        )
      )
    );
  });

  showSuccessNotification$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ConversationActions.fetchMessagesSuccess, ConversationActions.updateMessagesSuccess),
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
          ConversationActions.fetchMessagesFailure,
          ConversationActions.updateMessagesFailure,
          ConversationActions.sendMessageFailure,
          ConversationActions.deleteConversationFailure
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
    private readonly conversationApi: PersonConversationApiService,
    private readonly toast: MessageService,
    private readonly store: Store,
    private readonly router: Router
  ) {}
}
