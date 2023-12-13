import { createReducer, on } from '@ngrx/store';
import { UsersState } from '../../types';
import { UsersActions } from '.';

export const initialState: UsersState = {
  count: 0,
  users: [],
  lastFetchTime: null,
  error: null,
  loading: false,
};

export const usersReducer = createReducer(
  initialState,
  on(
    UsersActions.fetchUsers,
    UsersActions.createConversation,
    UsersActions.updateUsers,
    (state): UsersState => ({
      ...state,
      error: null,
      loading: true,
    })
  ),
  on(
    UsersActions.fetchUsersSuccess,
    (state, { count, users }): UsersState => ({ ...state, count, users, error: null, loading: false })
  ),
  on(
    UsersActions.updateUsersSuccess,
    (state, { count, users }): UsersState => ({ lastFetchTime: Date.now(), count, users, error: null, loading: false })
  ),
  on(UsersActions.createConversationSuccess, (state, { conversationID, companionID }): UsersState => {
    return {
      ...state,
      users: state.users.map(user => (user.uid === companionID ? { ...user, conversationID } : user)),
      error: null,
      loading: false,
    };
  }),
  on(
    UsersActions.fetchUsersFailure,
    UsersActions.createConversationFailure,
    UsersActions.updateUsersFailure,
    (state, { response }): UsersState => ({ ...state, lastFetchTime: null, error: response, loading: false })
  )
);
