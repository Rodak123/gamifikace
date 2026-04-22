import { BaseRequestSchemaType, SuccessRespoonseSchemaType } from '../schemas';
import { Auth } from './auth';

export type Method = 'get' | 'post';

export interface Endpoint<
  TReq extends BaseRequestSchemaType,
  TRes extends SuccessRespoonseSchemaType,
  TIsAuth extends boolean,
> {
  path: string;
  method: Method;
  requestSchema: TReq;
  responseSchema: TRes;
  auth: Auth<TIsAuth>;
}
