import { Module } from '@nestjs/common';

import { RatesController } from './rates.controller';
import { RatesService } from './rates.service';

@Module({
  imports: [],
  controllers: [RatesController],
  providers: [RatesService],
})
export class RatesModule {}
