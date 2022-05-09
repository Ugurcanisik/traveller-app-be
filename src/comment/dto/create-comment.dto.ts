export class CreateCommentDto {
  readonly userId: string;
  readonly travelId: string;
  readonly commentDate: string;
  readonly comment: string;
}
