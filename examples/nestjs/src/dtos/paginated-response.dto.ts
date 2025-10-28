import { ApiProperty } from '@nestjs/swagger';
import { GetResponseDto } from './get-response.dto';

export class PaginatedResponseDto {
  @ApiProperty({ description: 'Общее количество элементов', example: 100 })
  total: number;

  @ApiProperty({ description: 'Текущая страница', example: 1 })
  page: number;

  @ApiProperty({ description: 'Количество на странице', example: 10 })
  limit: number;

  @ApiProperty({ type: [GetResponseDto], description: 'Список элементов' })
  items: GetResponseDto[];
}