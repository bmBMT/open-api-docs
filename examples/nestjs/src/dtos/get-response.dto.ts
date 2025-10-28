import { ApiProperty } from '@nestjs/swagger';
import { StatusEnum } from 'src/common/enums/status.enum';

export class GetResponseDto {
  @ApiProperty({
    description: 'UUID ресурса',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  id: string;

  @ApiProperty({ description: 'Название ресурса', example: 'Demo Example' })
  name: string;

  @ApiProperty({
    description: 'Описание ресурса',
    example: 'Тестовый пример для демонстрации',
  })
  description: string;

  @ApiProperty({ description: 'Статус ресурса', enum: StatusEnum })
  status: StatusEnum;

  @ApiProperty({
    description: 'Дата создания',
    example: '2025-10-28T12:00:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Дата последнего обновления',
    example: '2025-10-28T14:30:00.000Z',
  })
  updatedAt: Date;
}
