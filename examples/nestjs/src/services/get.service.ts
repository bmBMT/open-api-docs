import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { StatusEnum } from 'src/common/enums/status.enum';
import { GetQuerysDto } from 'src/dtos/get-query.dto';
import { PaginatedResponseDto } from 'src/dtos/paginated-response.dto';

@Injectable()
export class GetService {
  async findAll(filters: GetQuerysDto): Promise<PaginatedResponseDto> {
    const total = 42;

    const items = Array.from({ length: filters.limit || 10 }).map((_, i) => ({
      id: randomUUID(),
      name: `Example ${i + 1}`,
      description: 'Автоматически сгенерированный элемент',
      status: StatusEnum.ACTIVE,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    return {
      total,
      page: filters.page || 1,
      limit: filters.limit || 10,
      items,
    };
  }
}
