import {
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayInit,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { SocketService } from './socket.service';
import { RatesService } from 'src/rates/rates.service';
import { AccountsService } from 'src/accounts/accounts.service';

@WebSocketGateway({
  cors: {
    origin: '*',
    methods: ['GET'],
  },
})
export class SocketGateway implements OnGatewayConnection, OnGatewayInit {
  @WebSocketServer()
  private server: Socket;

  constructor(
    private socketService: SocketService,
    private ratesService: RatesService,
    private accountService: AccountsService,
  ) {}

  handleConnection(socket: Socket): void {
    this.socketService.handleConnection(socket);
  }

  afterInit() {
    this.ratesService.rate.subscribe((x) => {
      this.server.emit('rate_variation', x);
    });
    this.accountService.accountUpdate.subscribe((x) => {
      this.server.emit('account_update', x);
    });
  }
}
