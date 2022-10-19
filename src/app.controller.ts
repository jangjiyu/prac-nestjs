import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // [GET] /api
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user') // [GET] /api/user
  getUser(): string {
    return this.appService.getUser();
  }

  @Post('user') // [POST] /api/user
  postUser(): string {
    return this.appService.postUser();
  }
}
