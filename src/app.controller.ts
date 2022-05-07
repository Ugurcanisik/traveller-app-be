import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async init() {
    const category = await this.appService.allCategory();
    const travel = await this.appService.allTravel();

    return {
      category: category,
      travel: travel,
    };
  }
}
