import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../configrations/database/abstract.entity';

@Entity('Like')
export class Like extends AbstractEntity {
  @Column({ type: 'varchar', length: 100, nullable: true })
  userId: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  travelId: string;
}
