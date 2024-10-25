import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { Observable } from 'rxjs';

import { ClsStoreWithAbortSignal, RequestWithAbortSignal } from '../types';

@Injectable()
export class AbortInterceptor implements NestInterceptor {
  private readonly logger = new Logger(AbortInterceptor.name);

  constructor(private readonly cls: ClsService<ClsStoreWithAbortSignal>) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest<RequestWithAbortSignal>();
    const controller = new AbortController();
    const { signal: abortSignal } = controller;

    request.on('close', () => {
      this.logger.log('Client disconnected, aborting request...');
      controller.abort('Client disconnected');
    });

    // Add the abortSignal to the request object
    request.abortSignal = abortSignal;

    // Add the abortSignal to the CLS store
    this.cls.set('abortSignal', abortSignal);

    return next.handle();
  }
}
