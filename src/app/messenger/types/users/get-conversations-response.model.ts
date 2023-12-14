export type GetConversationsResponse = {
  Count: number;
  Items: ConversationResponse[];
};

export type ConversationResponse = {
  id: {
    S: string;
  };
  companionID: {
    S: string;
  };
};

export type Conversation = {
  id: string;
  companionID: string;
};
