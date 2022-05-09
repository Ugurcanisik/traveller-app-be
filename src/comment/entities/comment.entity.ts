import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from '../../configrations/database/abstract.entity';
import { User } from '../../users/entities/user.entity';
import { Travel } from '../../travels/entities/travel.entity';

@Entity('Comment')
export class Comment extends AbstractEntity {
  @ManyToOne((type) => User, (user) => user.id)
  user: User[];

  @ManyToOne((type) => Travel, (travel) => travel.id)
  travel: Travel[];

  @Column({ type: 'varchar', length: 50, nullable: true })
  commentDate: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  comment: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  replyComment: string;
}
