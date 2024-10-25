import { Injectable, Logger } from '@nestjs/common';

import { reallyLongRunningTask } from './experiment.utils';
import { ExperimentServiceB } from './experiment-service-b.service';
import { RequestWithAbortSignal } from '../../common/types';

@Injectable()
export class ExperimentService {
  private readonly logger = new Logger(ExperimentService.name);

  constructor(private readonly experimentServiceB: ExperimentServiceB) {}

  async search() {
    // Do some other stuff

    return await reallyLongRunningTask();
  }

  async searchV2(req: RequestWithAbortSignal) {
    // Do some other stuff

    const abortSignal = req.abortSignal;

    return await reallyLongRunningTask(abortSignal);
  }

  async searchInServiceB(req: RequestWithAbortSignal) {
    // Do some other stuff

    return await this.experimentServiceB.searchInServiceB(req);
  }

  async searchV3() {
    // Do some other stuff

    return await this.experimentServiceB.searchInServiceBv2();
  }
}
