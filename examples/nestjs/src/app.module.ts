import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SwaggerUIModule } from '@bmbmt-swagger/nestjs';

@Module({
  imports: [
    SwaggerUIModule.forRoot({
      path: '/api-docs',
      swaggerUrl: '/swagger-json',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
