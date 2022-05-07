import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async findUserById(id: string) {
    return await this.usersService.findOne(id);
  }

  async findUserByUserName(id: string) {
    return await this.usersService.findByUserName(id);
  }
}
