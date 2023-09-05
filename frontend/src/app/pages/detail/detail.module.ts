import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { DetailComponent } from './detail.component';
import { BalanceHighlightDirective } from 'src/app/directives/balance-variation-flash.directive';
import { AccountsApiService } from 'src/app/apis/accounts.service';
import { RatesApiService } from 'src/app/apis/rate.service';

const routes: Routes = [{ path: '', component: DetailComponent }];

@NgModule({
  declarations: [DetailComponent],
  providers: [AccountsApiService, RatesApiService],
  imports: [
    MatTableModule,
    MatCardModule,
    CommonModule,
    RouterModule.forChild(routes),
    BalanceHighlightDirective,
  ],
})
export class DetailModule {}
