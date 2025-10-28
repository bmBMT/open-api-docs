import {
  Controller,
  Delete,
  Get,
  Head,
  Options,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiOkResponse,
  ApiTags,
  ApiBasicAuth,
  ApiOperation,
} from '@nestjs/swagger';

@ApiTags('ExampleController')
@ApiTags('Test')
@ApiTags('Test213')
@ApiTags('Test213eq')
@Controller()
@ApiBasicAuth()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({ type: Number, description: 'response description' })
  getHello(): string {
    return this.appService.getHello();
  }
  @ApiOkResponse({ type: String })
  getHellsdo(): string {
    return this.appService.getHello();
  }
  @Post('tes/:id')
  @ApiOperation({
    summary: 'summary',
    description: ' description',
    // deprecated: true,
    externalDocs: {
      url: 'https://externalDocs.url',
      description: 'externalDocs description',
    },
  })
  @ApiOkResponse({ type: String })
  getHellsddwo(): string {
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
  @Head()
  @ApiOkResponse({ type: String })
  getsdaHellso(): string {
    return this.appService.getHello();
  }
  @Options()
  @ApiOkResponse({ type: String })
  getsddwqaHellso(): string {
    return this.appService.getHello();
  }
}
