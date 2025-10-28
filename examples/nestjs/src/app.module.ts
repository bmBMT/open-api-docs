import { Module } from '@nestjs/common';
import { DeleteController } from './controllers/delete.controller';
import { GetController } from './controllers/get.controller';
import { GetService } from './services/get.service';

@Module({
  imports: [],
  controllers: [DeleteController, GetController],
  providers: [GetService],
})
export class AppModule {}
