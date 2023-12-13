export type GetPersonsResponse = {
  Count: number;
  Items: PersonResponse[];
};

export type PersonResponse = {
  name: {
    S: string;
  };
  uid: {
    S: string;
  };
};
