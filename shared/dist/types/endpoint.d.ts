import { BaseRequestSchemaType, SuccessRespoonseSchemaType } from '../schemas';
export type Method = 'get' | 'post';
export interface Auth<TIsAuth extends boolean> {
    isAuthenticated: TIsAuth;
}
export interface Endpoint<TReq extends BaseRequestSchemaType, TRes extends SuccessRespoonseSchemaType, TIsAuth extends boolean = false> {
    path: string;
    method: Method;
    requestSchema: TReq;
    responseSchema: TRes;
    auth: Auth<TIsAuth>;
}
