import { Injectable } from '@nestjs/common';
import { CategoryService } from './category/category.service';
import { TravelsService } from './travels/travels.service';

@Injectable()
export class AppService {
  constructor(
    private CategoryService: CategoryService,
    private TravelsService: TravelsService,
  ) {}

  allCategory() {
    return this.CategoryService.findAll();
  }

  allTravel() {
    return this.TravelsService.findAll();
  }
}
