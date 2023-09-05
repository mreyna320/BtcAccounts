import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AccountsApiService } from 'src/app/apis/accounts.service';
import { RatesApiService } from 'src/app/apis/rate.service';
import { BreadcrumbService } from 'src/app/core/components/breadcrumb/breadcrumb.service';
import { IAccount, IAccountMovement } from 'src/app/models/account.model';
import { SocketService } from 'src/app/socket/socket.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  exchangeRate = 0;
  account!: IAccount;
  accountMovements: IAccountMovement[] = [];
  displayedColumns: string[] = [
    'confirmedDate',
    'orderId',
    'orderCode',
    'transactionType',
    'debit',
    'credit',
    'balance',
  ];

  private destroy$ = new Subject<null>();

  constructor(
    private accountApi: AccountsApiService,
    private socketService: SocketService,
    private ratesApi: RatesApiService,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];

    this.breadcrumbService.setCrumbs([
      { label: 'Accounts', url: 'accounts' },
      { label: 'Details', url: `accounts/:${id}` },
    ]);

    this.accountApi
      .getAccountById(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => {
        this.account = x;
        this.accountMovements = (x.movements ?? []) as IAccountMovement[];
      });

    this.ratesApi
      .getRate()
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => (this.exchangeRate = x));

    this.socketService.listenRatioVariations
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => (this.exchangeRate = x));

    this.socketService.listenAccountsUpdate
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => {
        if (this.account.id !== x.id) return;
        this.account = x;
        this.accountMovements = (x.movements ?? []) as IAccountMovement[];
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
