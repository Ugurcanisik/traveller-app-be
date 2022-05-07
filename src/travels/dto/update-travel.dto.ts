import { PartialType } from '@nestjs/mapped-types';
import { CreateTravelDto } from './create-travel.dto';

export class UpdateTravelDto extends PartialType(CreateTravelDto) {
  readonly category_id: string;
  readonly name: string;
  readonly description: string;
  readonly picture: string;
}
