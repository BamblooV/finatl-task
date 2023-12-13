import { createReducer, on } from '@ngrx/store';
import { GroupsState } from '../../types';
import { GroupsActions } from '.';

export const initialState: GroupsState = {
  count: 0,
  groups: [],
  lastFetchTime: null,
  error: null,
  loading: false,
};

export const groupsReducer = createReducer(
  initialState,
  on(
    GroupsActions.createGroup,
    GroupsActions.deleteGroup,
    GroupsActions.fetchGroups,
    GroupsActions.updateGroups,
    (state): GroupsState => ({
      ...state,
      error: null,
      loading: true,
    })
  ),
  on(
    GroupsActions.createGroupSuccess,
    (state, { groupID, name, createdBy }): GroupsState => ({
      ...state,
      count: state.count + 1,
      groups: [
        {
          createdAt: Date.now(),
          createdBy,
          id: groupID,
          name,
        },
        ...state.groups,
      ],
      loading: false,
      error: null,
    })
  ),
  on(
    GroupsActions.deleteGroupSuccess,
    (state, { groupID }): GroupsState => ({
      ...state,
      count: state.count - 1,
      groups: state.groups.filter(group => group.id !== groupID),
      loading: false,
      error: null,
    })
  ),
  on(
    GroupsActions.fetchGroupsSuccess,
    (state, { count, groups }): GroupsState => ({
      ...state,
      groups,
      count,
      loading: false,
      error: null,
    })
  ),
  on(
    GroupsActions.updateGroupsSuccess,
    (state, { count, groups }): GroupsState => ({
      groups,
      count,
      loading: false,
      error: null,
      lastFetchTime: Date.now(),
    })
  ),
  on(
    GroupsActions.createGroupFailure,
    GroupsActions.deleteGroupFailure,
    (state, { response }): GroupsState => ({
      ...state,
      loading: false,
      error: response,
    })
  ),
  on(
    GroupsActions.fetchGroupsFailure,
    GroupsActions.updateGroupsFailure,
    GroupsActions.createGroupFailure,
    (state, { response }): GroupsState => ({
      ...state,
      lastFetchTime: null,
      loading: false,
      error: response,
    })
  )
);
