import { Component, OnDestroy, OnInit } from '@angular/core';
import { SocketService } from './socket/socket.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'btc-frontend';
  exchangeRate: number = 0;

  private destroy$ = new Subject<null>();

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.listenRatioVariations
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => (this.exchangeRate = x));
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
