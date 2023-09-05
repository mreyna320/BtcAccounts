import { Injectable, OnDestroy } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Subject } from 'rxjs';
import { IAccount } from '../models/account.model';

@Injectable({ providedIn: 'root' })
export class SocketService implements OnDestroy {
  public get listenRatioVariations(): Observable<number> {
    return this._listenRatioVariations.asObservable();
  }
  private _listenRatioVariations = new Subject<number>();

  public get listenAccountsUpdate(): Observable<IAccount> {
    return this._listenAccountsUpdate.asObservable();
  }
  private _listenAccountsUpdate = new Subject<IAccount>();

  constructor(private socket: Socket) {
    this.socket.on('rate_variation', (data: any) =>
      this._listenRatioVariations.next(data)
    );
    this.socket.on('account_update', (data: any) =>
      this._listenAccountsUpdate.next(data)
    );
  }

  ngOnDestroy(): void {
    this._listenAccountsUpdate.complete();
    this._listenRatioVariations.complete();
    this.socket.disconnect();
  }
}
