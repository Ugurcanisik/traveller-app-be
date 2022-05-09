import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentRepository } from './comment.repository';

@Injectable()
export class CommentService {
  constructor(private CommentRepository: CommentRepository) {}

  create(createCommentDto: CreateCommentDto) {
    return this.CommentRepository.save(createCommentDto);
  }

  findAll() {
    return this.CommentRepository.find({
      relations: ['user', 'travel'],
    });
  }

  findOne(id: string) {
    return this.CommentRepository.find({
      relations: ['user', 'travel'],
      where: { travel: id },
    });
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
