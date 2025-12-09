import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class DeleteBodyDto {
  @ApiProperty({ type: String, description: 'description', readOnly: true })
  reason?: string;

  @ApiPropertyOptional({ type: Boolean })
  confirm?: boolean;
}
