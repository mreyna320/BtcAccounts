export class Account {
  id: string;
  name: string;
  category: string;
  tags: string;
  balance: number;
  availableBalance: number;
  movements?: AccountMovement[];
}

export class AccountMovement {
  confirmedDate: string;
  orderId: string;
  orderCode: string;
  transactionType: string;
  debit?: number;
  credit?: number;
  balance: number;
}
