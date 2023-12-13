export class CustomError extends Error {
  constructor(
    message: string,
    public type: string
  ) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
