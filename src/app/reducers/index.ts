/* eslint-disable @typescript-eslint/no-empty-interface */
import { isDevMode } from '@angular/core';
import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { authHydrationMetaReducer, authReducer } from '../auth/state/auth.reducer';
import { RootState } from './types';
import { userInfoReducer } from '../user/state/user.reducer';
import { groupsReducer } from '../messenger/state/groups/groups.reducer';
import { usersReducer } from '../messenger/state/users/users.reducer';
import { groupDialogReducer } from '../messenger/state/group-dialog/group-dialog.reducer';

export const reducers: ActionReducerMap<RootState> = {
  auth: authReducer,
  user: userInfoReducer,
  groups: groupsReducer,
  users: usersReducer,
  groupDialog: groupDialogReducer,
};

export const metaReducers: MetaReducer<RootState>[] = isDevMode()
  ? [authHydrationMetaReducer]
  : [authHydrationMetaReducer];
