import { Injectable } from '@nestjs/common';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RatesService {
  public get rate() {
    return this._rate.asObservable();
  }
  private _rate = new BehaviorSubject(0);

  constructor() {
    this.generateRate();
    setInterval(() => this.generateRate(), 10000);
  }

  public getCurrentRate(): number {
    return this._rate.value;
  }

  private generateRate(): void {
    return this._rate.next(+(Math.random() * (12000 - 5000) + 5000).toFixed());
  }
}
