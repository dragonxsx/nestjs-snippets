import { Injectable, Logger } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';

import { reallyLongRunningTask } from './experiment.utils';
import {
  ClsStoreWithAbortSignal,
  RequestWithAbortSignal,
} from '../../common/types';

@Injectable()
export class ExperimentServiceB {
  private readonly logger = new Logger(ExperimentServiceB.name);

  constructor(private readonly cls: ClsService<ClsStoreWithAbortSignal>) {}

  async searchInServiceB(req: RequestWithAbortSignal) {
    // Do some other stuff

    const abortSignal = (req as any).abortSignal;

    return await reallyLongRunningTask(abortSignal);
  }

  async searchInServiceBv2() {
    // Do some other stuff

    const abortSignal = this.cls.get('abortSignal');

    return await reallyLongRunningTask(abortSignal);
  }
}
