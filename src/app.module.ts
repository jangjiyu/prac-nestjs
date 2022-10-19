import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 외부 서버(aws 비밀저장소, 구글클라우드 플랫폼 비밀관리자 등)에서 환경변수 불러올 때 + ConfigModule 옵션에 load: [getEnv(이건 함수명))] 추가
const getEnv = async () => {
  const res = axios.get('/secretKey');
  return res.data;
};

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [getEnv] })],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
