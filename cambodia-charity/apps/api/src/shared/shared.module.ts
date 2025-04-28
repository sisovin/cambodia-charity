import { Module } from '@nestjs/common';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { PaginationService } from './services/pagination.service';

@Module({
  providers: [ResponseInterceptor, HttpExceptionFilter, PaginationService],
  exports: [ResponseInterceptor, HttpExceptionFilter, PaginationService],
})
export class SharedModule {}
