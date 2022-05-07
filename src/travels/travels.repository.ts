import { EntityRepository, Repository } from 'typeorm';
import { Travel } from './entities/travel.entity';

@EntityRepository(Travel)
export class TravelRepository extends Repository<Travel> {
  // custom query
}
