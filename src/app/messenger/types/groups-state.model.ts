import { DeleteGroupErrorResponse } from './delete-group-error.model';
import { GetGroupsErrorResponse } from './get-groups-error.model';
import { Group } from './group.model';
import { PostGroupErrorResponse } from './post-group-error';

export type GroupsState = {
  groups: Group[];
  count: number;
  loading: boolean;
  error: DeleteGroupErrorResponse | GetGroupsErrorResponse | PostGroupErrorResponse | null;
  lastFetchTime: ReturnType<typeof Date.now> | null;
};
