import { Module } from '@nestjs/common';
import { SocketGateway } from './socket.gateway';
import { SocketService } from './socket.service';
import { RatesService } from 'src/rates/rates.service';
import { AccountsService } from 'src/accounts/accounts.service';

@Module({
  providers: [SocketGateway, SocketService, RatesService, AccountsService],
})
export class SocketModule {}
