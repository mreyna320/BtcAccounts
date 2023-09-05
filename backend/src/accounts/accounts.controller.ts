import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { Account } from './accounts.model';
import { AccountsService } from './accounts.service';
// import { getAccountParamsDTO } from './dtos/get-accounts-params.dto';

@Controller('api/accounts')
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Get()
  findAll(): Account[] {
    try {
      return this.accountsService.getAllAccounts();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  getAccountById(@Param('id') id: string): Account {
    return this.accountsService.getAccountBy(id);
  }
}
