import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { AccountsApiService } from 'src/app/apis/accounts.service';
import { RatesApiService } from 'src/app/apis/rate.service';
import { BreadcrumbService } from 'src/app/core/components/breadcrumb/breadcrumb.service';
import { IAccount } from 'src/app/models/account.model';
import { SocketService } from 'src/app/socket/socket.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  providers: [AccountsApiService, RatesApiService],
})
export class AccountsComponent implements OnInit, OnDestroy {
  exchangeRate = 0;
  displayedColumns: string[] = [
    'accountName',
    'category',
    'tags',
    'balance',
    'availableBalance',
  ];
  accounts: IAccount[] = [];

  private destroy$ = new Subject<null>();

  constructor(
    private accountApi: AccountsApiService,
    private socketService: SocketService,
    private ratesApi: RatesApiService,
    private breadcrumbService: BreadcrumbService,
    private router: Router
  ) {}

  ngOnInit() {
    this.breadcrumbService.setCrumbs([{ label: 'Accounts', url: 'accounts' }]);

    this.accountApi
      .getAccounts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => (this.accounts = x));

    this.ratesApi
      .getRate()
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => (this.exchangeRate = x));

    this.socketService.listenRatioVariations
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => (this.exchangeRate = x));

    this.socketService.listenAccountsUpdate
      .pipe(takeUntil(this.destroy$))
      .subscribe((updatedAccount) => {
        const updated = this.accounts.find((x) => x.id === updatedAccount.id);
        if (updated) {
          updated.availableBalance = updatedAccount.availableBalance;
          updated.balance = updatedAccount.balance;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
