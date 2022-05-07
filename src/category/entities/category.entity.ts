import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../configrations/database/abstract.entity';

@Entity('Category')
export class Category extends AbstractEntity {
  @Column({ type: 'varchar', length: 100, nullable: true })
  name: string;

  @Column({ type: 'boolean', nullable: true, default: 1 })
  isActive: boolean;

  @Column({ type: 'int', width: 100, nullable: true, default: 0 })
  order: number;
}
