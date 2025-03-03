import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerInit } from './swagger';
import * as dotenv from 'dotenv';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  dotenv.config();
  app.enableShutdownHooks();
  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || origin === process.env.FRONTEND_IP) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  });
  app.enableVersioning({ type: VersioningType.URI });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api');

  await swaggerInit(app, process.env.APP_MODE);
  await app.listen(4000);
}
bootstrap();
