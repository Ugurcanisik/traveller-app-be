import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { TravelRepository } from './travels.repository';

@Injectable()
export class TravelsService {
  constructor(private TravelRepository: TravelRepository) {}

  create(createTravelDto: CreateTravelDto) {
    return this.TravelRepository.save(createTravelDto);
  }

  findAll() {
    return this.TravelRepository.find({
      relations: ['category'],
      where: { deletedAt: null },
    });
  }

  findOne(id: string) {
    return this.TravelRepository.findOne(id);
  }

  update(id: string, updateTravelDto: UpdateTravelDto) {
    return this.TravelRepository.update(id, updateTravelDto);
  }

  remove(id: string) {
    return this.TravelRepository.update(id, { deletedAt: new Date() });
  }
}
