import { Injectable } from '@nestjs/common';

import { Account, AccountMovement } from './accounts.model';
import { Subject } from 'rxjs';
import { randomInt } from 'crypto';

@Injectable()
export class AccountsService {
  private accounts: Account[] = accounts;
  public get accountUpdate() {
    return this._accountUpdate.asObservable();
  }
  private _accountUpdate = new Subject();

  constructor() {
    setInterval(() => {
      const randomIndex = randomInt(14);
      const accountToUpdate = this.accounts[randomIndex];

      const variation = Math.random() * (Math.round(Math.random()) ? 1 : -1);
      const isNegative = variation < 0;

      this.addAccountMovement(accountToUpdate.id, {
        confirmedDate: new Date().toISOString(),
        balance: accountToUpdate.balance + variation,
        debit: isNegative ? variation * -1 : undefined,
        credit: !isNegative ? variation : undefined,
        orderCode: (Math.random() + 1).toString(36).substring(7),
        orderId: (Math.random() + 1).toString(36).substring(7),
        transactionType: 'Some transaction',
      });
    }, 40000);
  }

  getAllAccounts(): Account[] {
    return this.accounts.map(({ movements, ...account }) => account);
  }

  getAccountBy(id: string): Account {
    const account = this.accounts.find((x) => x.id === id);
    return account;
  }

  addAccountMovement(id: string, movement: AccountMovement): void {
    const accountToUpdate = this.accounts.find((account) => account.id === id);
    if (accountToUpdate) {
      accountToUpdate.movements.unshift(movement);
      const balanceVariation = movement.balance - accountToUpdate.balance;
      accountToUpdate.balance = movement.balance;
      accountToUpdate.availableBalance += balanceVariation;
      this._accountUpdate.next(accountToUpdate);
    }
  }
}

const accounts: Account[] = [
  {
    id: '1',
    availableBalance: 17.58499237220731,
    balance: 18.584992,
    category: 'category-1',
    name: 'name-1',
    tags: 'tag-1, otherTag',
    movements: [
      {
        orderId: 'AVASD',
        confirmedDate: '2023-09-03T09:06:37.674Z',
        orderCode: 'DDD232',
        transactionType: 'Initial',
        balance: 18.584992,
        credit: 18.584992,
      },
    ],
  },
  {
    id: '2',
    availableBalance: 2.8910267352245023,
    balance: 2.8910267352245023,
    category: 'category-2',
    name: 'name-2',
    tags: 'tag-2, otherTag',
    movements: [
      {
        orderId: 'AVASD',
        confirmedDate: '2023-09-03T09:06:37.674Z',
        orderCode: 'DDD232',
        transactionType: 'Initial',
        balance: 2.8910267352245023,
        credit: 2.8910267352245023,
      },
    ],
  },
  {
    id: '3',
    availableBalance: 3.1755511382492276,
    balance: 3.255511382492276,
    category: 'category-3',
    name: 'name-3',
    tags: 'tag-3, otherTag',
    movements: [
      {
        orderId: 'AVASD',
        confirmedDate: '2023-09-03T09:06:37.674Z',
        orderCode: 'DDD232',
        transactionType: 'Initial',
        balance: 3.255511382492276,
        credit: 3.255511382492276,
      },
    ],
  },
  {
    id: '4',
    availableBalance: 5.947934846020716,
    balance: 5.947934846020716,
    category: 'category-4',
    name: 'name-4',
    tags: 'tag-4, otherTag',
    movements: [
      {
        orderId: 'AVASD',
        confirmedDate: '2023-09-03T09:06:37.674Z',
        orderCode: 'DDD232',
        transactionType: 'Initial',
        balance: 5.947934846020716,
        credit: 5.947934846020716,
      },
    ],
  },
  {
    id: '5',
    availableBalance: 12.919398354966344,
    balance: 33,
    category: 'category-5',
    name: 'name-5',
    tags: 'tag-5, otherTag',
    movements: [
      {
        orderId: 'AVASD',
        confirmedDate: '2023-09-03T09:06:37.674Z',
        orderCode: 'DDD232',
        transactionType: 'Initial',
        balance: 33,
        credit: 33,
      },
    ],
  },
  {
    id: '6',
    availableBalance: 5.764823002055497,
    balance: 7.12341212344,
    category: 'category-6',
    name: 'name-6',
    tags: 'tag-6, otherTag',
    movements: [
      {
        orderId: 'AVASD',
        confirmedDate: '2023-09-03T09:06:37.674Z',
        orderCode: 'DDD232',
        transactionType: 'Initial',
        balance: 7.12341212344,
        credit: 7.12341212344,
      },
    ],
  },
  {
    id: '7',
    availableBalance: 5.2428760556453335,
    balance: 22,
    category: 'category-7',
    name: 'name-7',
    tags: 'tag-7, otherTag',
    movements: [
      {
        orderId: 'AVASD',
        confirmedDate: '2023-09-03T09:06:37.674Z',
        orderCode: 'DDD232',
        transactionType: 'Initial',
        balance: 22,
        credit: 22,
      },
    ],
  },
  {
    id: '8',
    availableBalance: 21.545497181872097,
    balance: 25,
    category: 'category-8',
    name: 'name-8',
    tags: 'tag-8, otherTag',
    movements: [
      {
        orderId: 'AVASD',
        confirmedDate: '2023-09-03T09:06:37.674Z',
        orderCode: 'DDD232',
        transactionType: 'Initial',
        balance: 25,
        credit: 25,
      },
    ],
  },
  {
    id: '9',
    availableBalance: 6.420266623559225,
    balance: 28.14121312,
    category: 'category-9',
    name: 'name-9',
    tags: 'tag-9, otherTag',
    movements: [
      {
        orderId: 'AVASD',
        confirmedDate: '2023-09-03T09:06:37.674Z',
        orderCode: 'DDD232',
        transactionType: 'Initial',
        balance: 28.14121312,
        credit: 28.14121312,
      },
    ],
  },
  {
    id: '10',
    availableBalance: 15.900216925060086,
    balance: 27.900216925060086,
    category: 'category-10',
    name: 'name-10',
    tags: 'tag-10, otherTag',
    movements: [
      {
        orderId: 'AVASD',
        confirmedDate: '2023-09-03T09:06:37.674Z',
        orderCode: 'DDD232',
        transactionType: 'Initial',
        balance: 27.900216925060086,
        credit: 27.900216925060086,
      },
    ],
  },
  {
    id: '11',
    availableBalance: 7.1802508847555355,
    balance: 8,
    category: 'category-11',
    name: 'name-11',
    tags: 'tag-11, otherTag',
    movements: [
      {
        orderId: 'AVASD',
        confirmedDate: '2023-09-03T09:06:37.674Z',
        orderCode: 'DDD232',
        transactionType: 'Initial',
        balance: 8,
        credit: 8,
      },
    ],
  },
  {
    id: '12',
    availableBalance: 24.839443448554515,
    balance: 25,
    category: 'category-12',
    name: 'name-12',
    tags: 'tag-12, otherTag',
    movements: [
      {
        orderId: 'AVASD',
        confirmedDate: '2023-09-03T09:06:37.674Z',
        orderCode: 'DDD232',
        transactionType: 'Initial',
        balance: 25,
        credit: 25,
      },
    ],
  },
  {
    id: '13',
    availableBalance: 8.963262323979192,
    balance: 8.963262323979192,
    category: 'category-13',
    name: 'name-13',
    tags: 'tag-13, otherTag',
    movements: [
      {
        orderId: 'AVASD',
        confirmedDate: '2023-09-03T09:06:37.674Z',
        orderCode: 'DDD232',
        transactionType: 'Initial',
        balance: 8.963262323979192,
        credit: 8.963262323979192,
      },
    ],
  },
  {
    id: '14',
    availableBalance: 14.911277361003298,
    balance: 17.9117361003298,
    category: 'category-14',
    name: 'name-14',
    tags: 'tag-14, otherTag',
    movements: [
      {
        orderId: 'AVASD',
        confirmedDate: '2023-09-03T09:06:37.674Z',
        orderCode: 'DDD232',
        transactionType: 'Initial',
        balance: 17.9117361003298,
        credit: 17.9117361003298,
      },
    ],
  },
  {
    id: '15',
    availableBalance: 2.8826656602391068,
    balance: 2.8826656602391068,
    category: 'category-15',
    name: 'name-15',
    tags: 'tag-15, otherTag',
    movements: [
      {
        orderId: 'AVASD',
        confirmedDate: '2023-09-03T09:06:37.674Z',
        orderCode: 'DDD232',
        transactionType: 'Initial',
        balance: 2.8826656602391068,
        credit: 2.8826656602391068,
      },
    ],
  },
];
