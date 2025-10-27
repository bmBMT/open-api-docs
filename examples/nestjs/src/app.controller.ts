import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiTags, ApiBasicAuth } from '@nestjs/swagger';

@ApiTags('ExampleController')
@Controller()
@ApiBasicAuth()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiTags('Test')
  @ApiOkResponse({ type: String })
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('tes')
  @ApiOkResponse({ type: String })
  getHellsdo(): string {
    return this.appService.getHello();
  }
  @Post()
  @ApiOkResponse({ type: String })
  getHelwalo(): string {
    return this.appService.getHello();
  }
  @Patch()
  @ApiOkResponse({ type: String })
  getHelqlo(): string {
    return this.appService.getHello();
  }
  @Delete()
  @ApiOkResponse({ type: String })
  getHseello(): string {
    return this.appService.getHello();
  }
  @Put()
  @ApiOkResponse({ type: String })
  getHellso(): string {
    return this.appService.getHello();
  }
}
