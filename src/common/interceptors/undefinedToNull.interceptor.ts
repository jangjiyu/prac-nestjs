import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // controller 가기 전
    // 블라블라~
    // 아래는 controller 후
    // 데이터 가공하기 좋음 -> undefined가 나오면 null로 바꿔 보낼 때 (json은 undefined를 모름, 받으면 에러남) / data만 보내지 않고 { data: user, code: 'SUCCESS' }처럼 보낼 때 + 이게 반복될 때
    return next
      .handle()
      .pipe(map((data) => (data === undefined ? null : data)));
    // return next.handle().pipe(map((data) => ({ data, code: 'SUCCESS' })));
  }
}
