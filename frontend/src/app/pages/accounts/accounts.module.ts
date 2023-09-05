import { NgModule } from '@angular/core';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { BalanceHighlightDirective } from 'src/app/directives/balance-variation-flash.directive';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AccountsComponent],
  imports: [
    MatTableModule,
    CommonModule,
    AccountsRoutingModule,
    BalanceHighlightDirective,
  ],
})
export class AccountsModule {}
