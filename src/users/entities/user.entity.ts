import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../configrations/database/abstract.entity';

@Entity('User')
export class User extends AbstractEntity {
  @Column({ type: 'varchar', length: 100, nullable: true })
  userName: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  password: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  firstName: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  lastName: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  rights: string;

  @Column({ type: 'varchar', length: 600, nullable: true })
  token: string;
}
