import { Module } from '@nestjs/common';

import { AccountsModule } from './accounts/accounts.module';
import { SocketModule } from './socket/socket.module';
import { RatesModule } from './rates/rates.module';

@Module({
  imports: [AccountsModule, SocketModule, RatesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
