import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikeRepository } from './like.repository';
import { Like } from './entities/like.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Like, LikeRepository])],
  controllers: [LikeController],
  providers: [LikeService],
})
export class LikeModule {}
