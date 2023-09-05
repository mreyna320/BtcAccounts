export interface IAccount {
  id: string;
  name: string;
  category: string;
  tags: string;
  balance: number;
  availableBalance: number;
  movements?: IAccountMovement;
}

export interface IAccountMovement {
  confirmedDate: string;
  orderId: string;
  orderCode: string;
  transactionType: string;
  debit?: number;
  credit?: number;
  balance: number;
}
