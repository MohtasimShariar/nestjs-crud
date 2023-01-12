import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // appService; 
  // constructor(appServiceGetter:AppService) { 
  //   this.appService = appServiceGetter; 
  // }
  constructor(private readonly appService: AppService) {}
 
  @Get('api')
  getHello(): string { 
    return this.appService.getHello(); 
  }
}
