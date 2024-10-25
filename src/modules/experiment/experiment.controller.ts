import { Controller, Post, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ExperimentService } from './experiment.service';
import { RequestWithAbortSignal } from '../../common/types';

@Controller('experiment')
@ApiTags('experiment')
export class ExperimentController {
  constructor(private readonly experimentService: ExperimentService) {}

  @Post('search')
  search() {
    return this.experimentService.search();
  }

  @Post('search-v2')
  searchV2(@Req() request: RequestWithAbortSignal) {
    return this.experimentService.searchV2(request);
  }

  @Post('search-v3')
  searchV3() {
    return this.experimentService.searchV3();
  }
}
