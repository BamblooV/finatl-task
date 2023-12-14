export type GetGroupsResponse = {
  Count: number;
  Items: ResponseGroup[];
};

export type ResponseGroup = {
  id: {
    S: string;
  };
  name: {
    S: string;
  };
  createdAt: {
    S: string;
  };
  createdBy: {
    S: string;
  };
};
