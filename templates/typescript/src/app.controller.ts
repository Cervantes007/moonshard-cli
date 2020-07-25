import { Controller, Get } from 'moonshard';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(public appService: AppService) {}

  @Get()
  helloWorld() {
    return this.appService.helloWorld();
  }
}