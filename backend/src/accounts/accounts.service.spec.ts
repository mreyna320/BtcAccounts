import { AccountMovement } from './accounts.model';
import { AccountsService } from './accounts.service';

describe('[AccountsService]', () => {
  let accountsService: AccountsService;

  beforeEach(() => {
    accountsService = new AccountsService();
  });

  describe('addAccountMovement', () => {
    it('should add a new movement to an account and emit update', async () => {
      const account = accountsService.getAccountBy('1');
      const variation = 0.23;
      const result: AccountMovement = {
        balance: account.balance + variation,
        confirmedDate: new Date().toISOString(),
        orderCode: 'TESTCODE',
        orderId: 'SOMEIDE',
        transactionType: 'Testing type',
        credit: variation,
        debit: null,
      };

      accountsService.accountUpdate.subscribe((x) => {
        expect(x.movements).toEqual(result);
      });

      accountsService.addAccountMovement('1', result);

      const accountToEvaluate = accountsService.getAccountBy('1');
      const movementToEval = accountToEvaluate.movements[0];

      expect(movementToEval).toEqual(result);
    });
  });
});
