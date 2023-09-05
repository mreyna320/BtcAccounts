import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { Account } from './accounts.model';
import { AccountsService } from './accounts.service';

@Controller('api/accounts')
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Get()
  findAll(): Account[] {
    try {
      return this.accountsService.findAllAccounts();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  getAccountById(@Param('id') id: string): Account {
    try {
      return this.accountsService.getAccountBy(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
