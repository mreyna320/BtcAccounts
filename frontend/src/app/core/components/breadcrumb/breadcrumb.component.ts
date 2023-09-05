import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Breadcrumb, BreadcrumbService } from './breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs$!: Observable<Breadcrumb[]>;

  constructor(private breadcrumbsService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbs$ = this.breadcrumbsService.getCrumbs();
  }
}
