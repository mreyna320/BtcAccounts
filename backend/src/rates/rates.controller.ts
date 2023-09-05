import { Controller, Get } from '@nestjs/common';
import { RatesService } from './rates.service';

@Controller('api/rates')
export class RatesController {
  constructor(private ratesService: RatesService) {}

  @Get()
  getRates(): number {
    return this.ratesService.getCurrentRate();
  }
}
