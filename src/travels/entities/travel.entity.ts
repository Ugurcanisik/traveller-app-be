import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../../configrations/database/abstract.entity';
import { Category } from '../../category/entities/category.entity';

@Entity('Travel')
export class Travel extends AbstractEntity {
  @Column({ type: 'varchar', length: 100, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  picture: string;

  @Column({ type: 'varchar', length: 900, nullable: true })
  description: string;

  @ManyToOne((type) => Category, (category) => category.id)
  category: Category[];
}
