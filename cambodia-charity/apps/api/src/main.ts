import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ResponseInterceptor } from '@shared/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set up global validation pipe
  app.useGlobalPipes(new ValidationPipe());

  // Set up global exception filter
  app.useGlobalFilters(new HttpExceptionFilter());

  // Set up global response interceptor
  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(4000);
}
bootstrap();
