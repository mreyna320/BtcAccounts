import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Breadcrumb {
  label?: string;
  url?: string;
}

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  private _crumbs = new Subject<Breadcrumb[]>();

  public setCrumbs(crumbs: Breadcrumb[]): void {
    this._crumbs.next(crumbs);
  }

  public getCrumbs() {
    return this._crumbs.asObservable();
  }
}
