export class CreateUserDto {
  readonly userName: string;
  password?: string;
  readonly email: string;
  readonly name: string;
  readonly lastName: string;
  readonly rights: string;
}
