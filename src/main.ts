import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerInit } from './swagger';
import * as dotenv from 'dotenv';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  dotenv.config();
  app.enableShutdownHooks();
  app.enableVersioning({ type: VersioningType.URI });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api');

  // CORS ni faqat ma'lum IP uchun ruxsat berish
  app.use((req, res, next) => {
    const allowedIp = process.env.FRONTEND_IP;
    if (req.ip !== allowedIp) {
      return res.status(403).json({ message: 'Not allowed by CORS' });
    }
    next();
  });

  await swaggerInit(app, process.env.APP_MODE);
  await app.listen(4000);
}
bootstrap();
