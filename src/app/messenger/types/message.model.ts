export type Message = {
  authorID: string;
  message: string;
  createdAt: ReturnType<typeof Date.now>;
};
