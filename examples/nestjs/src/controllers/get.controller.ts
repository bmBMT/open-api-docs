import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Example')
@ApiBearerAuth()
@Controller('get')
export class GetController {
  @Get(':id')
  deleteExample() {}
}
