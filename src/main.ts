import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  // swagger
  const config = new DocumentBuilder()
    .setTitle('Slack Clone Coding API')
    .setDescription('슬랙 클론코딩을 위한 API 문서입니다.')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // app.use(cookieParser());
  // app.use(
  //   session({
  //     resave: false,
  //     saveUninitialized: false,
  //     secret: process.env.COOKIE_SECRET,
  //     cookie: { httpOnly: true },
  //   }),
  // );
  // app.use(passport.initialize());
  // app.use(passport.session());

  await app.listen(port);
  console.log(
    `🟢 ${port} 포트로 서버가 열렸어요! http://localhost:${port}/api`,
  );

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
