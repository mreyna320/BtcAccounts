import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { RatesService } from 'src/rates/rates.service';

@Injectable()
export class SocketService {
  private readonly connectedClients: Map<string, Socket> = new Map();

  constructor(private ratesService: RatesService) {}

  handleConnection(socket: Socket): void {
    const clientId = socket.id;
    this.connectedClients.set(clientId, socket);

    socket.emit('rate_variation', this.ratesService.getCurrentRate());

    socket.on('disconnect', () => {
      this.connectedClients.delete(clientId);
    });
  }
}
