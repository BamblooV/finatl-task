export type GetGroupDialogResponse = {
  Count: number;
  Items: MessageResponse[];
};

export type MessageResponse = {
  authorID: {
    S: string;
  };
  message: {
    S: string;
  };
  createdAt: {
    S: string;
  };
};
