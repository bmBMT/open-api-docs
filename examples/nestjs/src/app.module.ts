import { Module } from '@nestjs/common';
import { DeleteController } from './controllers/delete.controller';
import { AppService } from './app.service';
import { GetController } from './controllers/get.controller';

@Module({
  imports: [],
  controllers: [DeleteController, GetController],
  providers: [AppService],
})
export class AppModule {}
