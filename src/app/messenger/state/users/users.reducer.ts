import { createReducer, on } from '@ngrx/store';
import { UsersState } from '../../types';
import { UsersActions } from '.';
import { ConversationActions } from '../person-conversation';

export const initialState: UsersState = {
  count: 0,
  users: {},
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
    ConversationActions.deleteConversation,
    (state): UsersState => ({
      ...state,
      error: null,
      loading: true,
    })
  ),
  on(
    UsersActions.fetchUsersSuccess,
    (state, { count, users }): UsersState => ({
      ...state,
      count,
      users: users.reduce<UsersState['users']>((acc, user) => {
        acc[user.uid] = user;

        return acc;
      }, {}),
      error: null,
      loading: false,
    })
  ),
  on(
    UsersActions.updateUsersSuccess,
    (state, { count, users }): UsersState => ({
      lastFetchTime: Date.now(),
      count,
      users: users.reduce<UsersState['users']>((acc, user) => {
        acc[user.uid] = user;

        return acc;
      }, {}),
      error: null,
      loading: false,
    })
  ),
  on(UsersActions.createConversationSuccess, (state, { conversationID, companionID }): UsersState => {
    return {
      ...state,
      users: Object.values(state.users)
        .map(user => (user.uid === companionID ? { ...user, conversationID } : user))
        .reduce<UsersState['users']>((acc, user) => {
          acc[user.uid] = user;

          return acc;
        }, {}),
      error: null,
      loading: false,
    };
  }),
  on(ConversationActions.deleteConversationSuccess, (state, { conversationID }): UsersState => {
    return {
      ...state,
      users: Object.values(state.users)
        .map(user => (user.conversationID === conversationID ? { ...user, conversationID: null } : user))
        .reduce<UsersState['users']>((acc, user) => {
          acc[user.uid] = user;

          return acc;
        }, {}),
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
