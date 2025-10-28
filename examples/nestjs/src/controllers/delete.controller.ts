import {
  Controller,
  Delete,
  Param,
  Query,
  Body,
  HttpCode,
  HttpStatus,
  ParseUUIDPipe,
  DefaultValuePipe,
  // UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
// import { AuthGuard } from '@nestjs/passport';

class DeleteExampleDto {
  reason?: string;
  confirm?: boolean;
}

class DeleteResultDto {
  id: string;
  deleted: boolean;
  timestamp: Date;
  message?: string;
}

@ApiBearerAuth()
@Controller('delete')
// @UseGuards(AuthGuard('jwt'))
export class DeleteController {
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Удаление ресурса по ID',
    description: `Удаляет объект из базы данных по идентификатору. Эндпоинт демонстрирует все возможности аннотаций Swagger. Можно указать причину удаления и подтвердить действие.`,
    externalDocs: {
      description: 'API спецификация и бизнес-правила удаления',
      url: 'https://example-wiki.company.com/api/delete-guidelines',
    },
  })
  @ApiParam({
    name: 'id',
    description: 'UUID ресурса, который нужно удалить',
    required: true,
    type: String,
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiQuery({
    name: 'force',
    required: false,
    description: 'Удалить безвозвратно (true/false)',
    type: Boolean,
    example: true,
  })
  @ApiQuery({
    name: 'soft',
    required: false,
    description: 'Мягкое удаление (пометить как удалённый, но не стирать)',
    type: Boolean,
    example: false,
  })
  @ApiQuery({
    name: 'notify',
    required: false,
    description: 'Отправить уведомление пользователю об удалении',
    type: Boolean,
    example: true,
  })
  @ApiBody({
    description: 'Детали удаления',
    type: DeleteExampleDto,
    examples: {
      default: {
        summary: 'Обычное удаление',
        value: { reason: 'Duplicate record', confirm: true },
      },
      noConfirm: {
        summary: 'Без подтверждения',
        value: { reason: 'Obsolete data', confirm: false },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Объект успешно удалён',
    type: DeleteResultDto,
    schema: {
      example: {
        id: '550e8400-e29b-41d4-a716-446655440000',
        deleted: true,
        timestamp: '2025-10-28T12:00:00.000Z',
        message: 'Object permanently deleted',
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Некорректный запрос или отсутствует подтверждение',
  })
  @ApiResponse({
    status: 401,
    description: 'Пользователь не авторизован',
  })
  @ApiResponse({
    status: 403,
    description: 'Доступ запрещён',
  })
  @ApiResponse({
    status: 404,
    description: 'Объект не найден',
  })
  @ApiResponse({
    status: 500,
    description: 'Внутренняя ошибка сервера',
  })
  deleteExample(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Query('force', new DefaultValuePipe(false)) force: boolean,
    @Query('soft', new DefaultValuePipe(false)) soft: boolean,
    @Query('notify', new DefaultValuePipe(false)) notify: boolean,
    @Body() body: DeleteExampleDto,
  ): DeleteResultDto {
    console.log('Delete params:', { id, force, soft, notify, body });

    return {
      id,
      deleted: true,
      timestamp: new Date(),
      message: force ? 'Object permanently deleted' : 'Object soft-deleted',
    };
  }

  @Delete('deprecated/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Удаление ресурса по ID',
    description: `Удаляет объект из базы данных по идентификатору. Эндпоинт демонстрирует все возможности аннотаций Swagger. Можно указать причину удаления и подтвердить действие.`,
    externalDocs: {
      description: 'API спецификация и бизнес-правила удаления',
      url: 'https://example-wiki.company.com/api/delete-guidelines',
    },
    deprecated: true,
  })
  @ApiParam({
    name: 'id',
    description: 'UUID ресурса, который нужно удалить',
    required: true,
    type: String,
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiQuery({
    name: 'force',
    required: false,
    description: 'Удалить безвозвратно (true/false)',
    type: Boolean,
    example: true,
  })
  @ApiQuery({
    name: 'soft',
    required: false,
    description: 'Мягкое удаление (пометить как удалённый, но не стирать)',
    type: Boolean,
    example: false,
  })
  @ApiQuery({
    name: 'notify',
    required: false,
    description: 'Отправить уведомление пользователю об удалении',
    type: Boolean,
    example: true,
  })
  @ApiBody({
    description: 'Детали удаления',
    type: DeleteExampleDto,
    examples: {
      default: {
        summary: 'Обычное удаление',
        value: { reason: 'Duplicate record', confirm: true },
      },
      noConfirm: {
        summary: 'Без подтверждения',
        value: { reason: 'Obsolete data', confirm: false },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Объект успешно удалён',
    type: DeleteResultDto,
    schema: {
      example: {
        id: '550e8400-e29b-41d4-a716-446655440000',
        deleted: true,
        timestamp: '2025-10-28T12:00:00.000Z',
        message: 'Object permanently deleted',
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Некорректный запрос или отсутствует подтверждение',
  })
  @ApiResponse({
    status: 401,
    description: 'Пользователь не авторизован',
  })
  @ApiResponse({
    status: 403,
    description: 'Доступ запрещён',
  })
  @ApiResponse({
    status: 404,
    description: 'Объект не найден',
  })
  @ApiResponse({
    status: 500,
    description: 'Внутренняя ошибка сервера',
  })
  deprecatedDeleteExample() {}
}
