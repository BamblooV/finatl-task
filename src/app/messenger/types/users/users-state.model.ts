import { GetConversationsErrorResponser } from './get-conversations-error.model';
import { GetPersonsErrorResponse } from './get-persons-error.model';
import { Person } from './person.model';
import { PostConversationErrorResponse } from './post-conversation-error.model';

export type UsersState = {
  users: Record<string, Person>;
  count: number;
  loading: boolean;
  error: PostConversationErrorResponse | GetPersonsErrorResponse | GetConversationsErrorResponser | null;
  lastFetchTime: ReturnType<typeof Date.now> | null;
};
