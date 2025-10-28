import { ApiPropertyOptional } from '@nestjs/swagger';

export class DeleteBodyDto {
  @ApiPropertyOptional({ type: String })
  reason?: string;

  @ApiPropertyOptional({ type: Boolean })
  confirm?: boolean;
}
