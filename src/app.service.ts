import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUser(): string {
    return 'Hello World!';
  }

  postUser(): string {
    return 'Hello World!';
  }
}