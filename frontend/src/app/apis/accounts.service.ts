import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.development';
import { IAccount } from '../models/account.model';

@Injectable()
export class AccountsApiService {
  private baseUrl = `${environment.api}/api/accounts`;
  constructor(private http: HttpClient) {}

  getAccounts(): Observable<IAccount[]> {
    return this.http.get<IAccount[]>(this.baseUrl);
  }

  getAccountById(id: string): Observable<IAccount> {
    return this.http.get<IAccount>(`${this.baseUrl}/${id}`);
  }
}
