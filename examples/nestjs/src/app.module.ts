import { Module } from '@nestjs/common';
import { DeleteController } from './controllers/delete.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [DeleteController],
  providers: [AppService],
})
export class AppModule {}
