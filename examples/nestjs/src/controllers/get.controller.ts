import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { EntityIdParamDto } from 'src/dtos/entity-id-param.dto';
import { GetQuerysDto } from 'src/dtos/get-query.dto';
import { PaginatedResponseDto } from 'src/dtos/paginated-response.dto';
import { GetService } from 'src/services/get.service';

@ApiTags('Example')
@ApiBearerAuth()
@Controller()
export class GetController {
  constructor(private readonly examplesService: GetService) {}

  @Get(':id')
  @ApiOperation({
    summary: 'Получить список ресурсов',
    description: `
      Возвращает список ресурсов с поддержкой фильтрации, пагинации и поиска.
      Эндпоинт демонстрирует использование всех возможных Swagger-декораторов для GET методов.
    `,
    externalDocs: {
      description: 'Бизнес-правила работы с Example API',
      url: 'https://example-docs.company.com/examples',
    },
    servers: [
      { url: 'http://server-get-one.com', description: 'first server' },
      { url: 'http://server-get-two.com', description: 'two server' },
    ],
  })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Поиск по названию',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    description: 'Фильтр по статусу',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Номер страницы',
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Количество элементов',
    example: 10,
  })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Успешное получение списка элементов',
  //   type: PaginatedResponseDto,
  // })
  @ApiOkResponse({
    type: PaginatedResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Некорректные параметры запроса' })
  @ApiResponse({ status: 401, description: 'Пользователь не авторизован' })
  @ApiResponse({ status: 500, description: 'Внутренняя ошибка сервера' })
  async getExamples(
    @Param() { id }: EntityIdParamDto,
    @Query() filters: GetQuerysDto,
  ): Promise<PaginatedResponseDto> {
    return this.examplesService.findAll(filters);
  }
}
