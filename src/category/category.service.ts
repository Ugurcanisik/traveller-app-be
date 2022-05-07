import { Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { CategoryRepository } from "./category.repository";

@Injectable()
export class CategoryService {
  constructor(private CategoryRepository: CategoryRepository) {
  }

  create(createCategoryDto: CreateCategoryDto) {
    return this.CategoryRepository.save(createCategoryDto);
  }

  findAll() {
    return this.CategoryRepository.find({ where: { deletedAt: null } });
  }

  findOne(id: string) {
    return this.CategoryRepository.findOne(id);
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.CategoryRepository.update(id, updateCategoryDto);
  }

  isActive(id: string, payload: object) {
    return this.CategoryRepository.update(id, payload);
  }

  rank(id: string, order: number) {
    return this.CategoryRepository.update(id, { order: order });
  }

  remove(id: string) {
    return this.CategoryRepository.update(id, { deletedAt: new Date() });
  }
}
