import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  // DB connection repository
  constructor(private UserRepository: UserRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.UserRepository.save(createUserDto);
  }

  findByName(firstName: string, lastName: string) {
    return this.UserRepository.findByName(firstName, lastName);
  }

  findAll() {
    return this.UserRepository.find({ where: { deletedAt: null } });
  }

  findOne(id: string) {
    return this.UserRepository.findOne(id);
  }

  findByUserName(payload) {
    return this.UserRepository.findOne({
      where: { userName: payload, deletedAt: null },
    })
      .then((response) => {
        return response;
      })
      .catch((e) => {
        return e;
      });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.UserRepository.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.UserRepository.update(id, { deletedAt: new Date() });
  }
}
