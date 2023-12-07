export type UserInfoError = {
  type: 'InvalidUserDataException' | 'InvalidTokenException' | 'InvalidIDException';
  message: string;
};
