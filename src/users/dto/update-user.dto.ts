import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  readonly userName?: string;
  readonly password?: string;
  readonly email?: string;
  readonly name?: string;
  readonly lastName?: string;
  readonly rights?: string;
  token?: string;
}
