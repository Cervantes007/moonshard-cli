import { Controller, Get, Param } from 'moonshard';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(public appService: AppService) {}

  @Get()
  helloWorld() {
    return this.appService.helloWorld();
  }

  @Get('/hi/:name')
  grettings(@Param('name') name: string) {
    return `MoonShard said: Hi, ${name}!`;
  }
}
