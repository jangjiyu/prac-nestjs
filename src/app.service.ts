import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getUser(): string {
    return this.configService.get('NAME'); // nest가 관리해주는 process.env?
  }

  postUser(): string {
    return 'Hello World!';
  }
}
