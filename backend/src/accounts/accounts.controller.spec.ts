import { AccountsController } from './accounts.controller';
import { Account } from './accounts.model';
import { AccountsService } from './accounts.service';

describe('[AccountsController]', () => {
  let accountsController: AccountsController;
  let accountsService: AccountsService;

  beforeEach(() => {
    accountsService = new AccountsService();
    accountsController = new AccountsController(accountsService);
  });

  describe('findAll', () => {
    it('should return an array of accounts', async () => {
      const result: Account[] = [
        {
          id: 'test',
          availableBalance: 1,
          balance: 1.2,
          category: 'test catt',
          name: 'testing account',
          tags: 'some-tag',
          movements: [],
        },
      ];
      jest
        .spyOn(accountsService, 'findAllAccounts')
        .mockImplementation(() => result);

      expect(await accountsController.findAll()).toBe(result);
    });
  });
});
