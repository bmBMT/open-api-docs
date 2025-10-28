import { ApiProperty } from '@nestjs/swagger';

export class DeleteResponseDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  deleted: boolean;
  @ApiProperty()
  timestamp: Date;
  @ApiProperty()
  message?: string;
}
