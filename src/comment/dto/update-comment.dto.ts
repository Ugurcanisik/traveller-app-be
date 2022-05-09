import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comment.dto';

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
  readonly userId: string;
  readonly travelId: string;
  readonly comment: string;
  readonly replyComment?: string;
}
