export class EndpointError extends Error {
  private _statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.name = 'EndpointError';
    this._statusCode = statusCode;
  }

  public get statusCode() {
    return this._statusCode;
  }
}
