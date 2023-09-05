import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class RatesApiService {
  private baseUrl = `${environment.api}/api/rates`;
  constructor(private http: HttpClient) {}

  getRate(): Observable<number> {
    return this.http.get<number>(this.baseUrl);
  }
}
