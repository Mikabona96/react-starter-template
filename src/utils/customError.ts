interface IArgs {
  status: number;
  message: string;
  data: any;
}

export class CustomError<T extends IArgs> extends Error {
  readonly message;
  readonly status;
  readonly data;
  constructor(args: T) {
    const { data, message, status } = args;
    super();
    this.status = status;
    this.message = message;
    this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}

export type CustomErrorType = InstanceType<typeof CustomError>;
