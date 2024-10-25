import { Request } from 'express';
import { ClsStore } from 'nestjs-cls';

export interface RequestWithAbortSignal extends Request {
  abortSignal: AbortSignal;
}

export interface ClsStoreWithAbortSignal extends ClsStore {
  abortSignal: AbortSignal;
}
