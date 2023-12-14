import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { catchError, combineLatestWith, exhaustMap, map, of, tap } from 'rxjs';
import { CustomError } from '@core/errors/custom-error';
import { Store } from '@ngrx/store';
import { ChatsApiService } from '../../services/chats-api.service';
import { GroupsActions } from '.';
import { AuthSelectors } from '../../../auth/state';

@Injectable()
export class GroupsEffects {
  fetchGroups = createEffect(() => {
    return this.actions$.pipe(
      ofType(GroupsActions.fetchGroups),
      exhaustMap(() =>
        this.chatsApi.fetchGroups().pipe(
          map(({ count, groups }) => {
            return GroupsActions.fetchGroupsSuccess({ count, groups, message: 'Groups successfully fetched' });
          }),
          catchError(error => of(GroupsActions.fetchGroupsFailure({ response: error })))
        )
      )
    );
  });

  updateGroups = createEffect(() => {
    return this.actions$.pipe(
      ofType(GroupsActions.updateGroups),
      exhaustMap(() =>
        this.chatsApi.updateGroups().pipe(
          map(({ count, groups }) => {
            return GroupsActions.updateGroupsSuccess({ count, groups, message: 'Groups successfully updated' });
          }),
          catchError(error => of(GroupsActions.updateGroupsFailure({ response: error })))
        )
      )
    );
  });

  createGroup = createEffect(() => {
    return this.actions$.pipe(
      ofType(GroupsActions.createGroup),
      combineLatestWith(this.store.select(AuthSelectors.selectAuthCredentials)),
      exhaustMap(([{ name }, { 'rs-uid': createdBy }]) => {
        if (!createdBy) {
          throw new CustomError('Unauthorized user', 'Client auth error');
        }

        return this.chatsApi.createGroup(name).pipe(
          map(({ groupID }) => {
            return GroupsActions.createGroupSuccess({
              createdBy,
              groupID,
              name,
              message: 'Group successfully created',
            });
          }),
          catchError(error => of(GroupsActions.createGroupFailure({ response: error })))
        );
      })
    );
  });

  deleteGroup = createEffect(() => {
    return this.actions$.pipe(
      ofType(GroupsActions.deleteGroup),
      exhaustMap(({ groupID }) =>
        this.chatsApi.deleteGroup(groupID).pipe(
          map(() => GroupsActions.deleteGroupSuccess({ groupID, message: 'Group successfully deleted' })),
          catchError(error => of(GroupsActions.deleteGroupFailure({ response: error })))
        )
      )
    );
  });

  showSuccessNotification$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          GroupsActions.createGroupSuccess,
          GroupsActions.deleteGroupSuccess,
          GroupsActions.fetchGroupsSuccess,
          GroupsActions.updateGroupsSuccess
        ),
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
        ofType(
          GroupsActions.createGroupFailure,
          GroupsActions.deleteGroupFailure,
          GroupsActions.fetchGroupsFailure,
          GroupsActions.updateGroupsFailure
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
    private readonly chatsApi: ChatsApiService,
    private readonly toast: MessageService,
    private readonly store: Store
  ) {}
}
