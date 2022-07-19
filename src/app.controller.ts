import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/404')
  return404(): any {
    return this.appService.return404();
  }

  @Get('/500')
  return500(): any {
    return this.appService.return500();
  }
}
