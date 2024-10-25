import { Module } from '@nestjs/common';

import { ExperimentService } from './experiment.service';
import { ExperimentController } from './experiment.controller';
import { ExperimentServiceB } from './experiment-service-b.service';

@Module({
  controllers: [ExperimentController],
  providers: [ExperimentService, ExperimentServiceB],
})
export class ExperimentModule {}
