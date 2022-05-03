import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // custom query
  findByName(firstName: string, lastName: string) {
    return this.findOne({ firstName, lastName });
  }
}
