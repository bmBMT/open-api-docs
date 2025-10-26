import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('ExampleController')
@Controller()
@ApiBearerAuth()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({ type: String })
  getHello(): string {
    return this.appService.getHello();
  }
}
