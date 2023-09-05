import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { MatCardModule } from '@angular/material/card';

const MATERIAL = [MatMenuModule, MatIconModule, MatCardModule];
const COMPONENTS = [HeaderComponent, BreadcrumbComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [RouterModule, HttpClientModule, CommonModule, ...MATERIAL],
  providers: [],
  exports: [...COMPONENTS],
})
export class CoreModule {}
