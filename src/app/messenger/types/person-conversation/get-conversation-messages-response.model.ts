import { MessageResponse } from '../group-dialog/get-group-dialog-response.model';

export type GetConversationMessagesResponse = {
  Count: number;
  Items: MessageResponse[];
};
