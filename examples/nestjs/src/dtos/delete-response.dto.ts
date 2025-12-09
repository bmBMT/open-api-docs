import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { StatusEnum } from 'src/common/enums/status.enum';
import { DeleteBodyDto } from './delete-body.dto';
import { PaginatedResponseDto } from './paginated-response.dto';

export class DeleteResponseDto {
  @ApiProperty({
    deprecated: true,
    readOnly: true,
    description: 'eqweq',
    format: 'test',
    nullable: true
  })
  id: string;
  @ApiProperty()
  deleted: boolean;
  @ApiProperty()
  timestamp: Date;
  @ApiProperty({
    minLength: 0,
    maxLength: 10,
    minimum: 0,
    maximum: 10,
    exclusiveMaximum: true,
    maxProperties: 10,
    pattern: 'ai90(238',
    externalDocs: { url: 'https://asd.wqe', description: 'asdwq' },
    nullable: true,
    xml: {
      name: 'OrderItems',
      wrapped: true,
      attribute: true,
      namespace: 'namespace',
      prefix: '$sd',
    },
  })
  message?: number;

  @ApiProperty({ type: DeleteBodyDto, isArray: true, description: 'test' })
  array: DeleteBodyDto[];

  @ApiProperty({
    type: String,
    isArray: true,
    format: 'uuid',
    description: 'test',
    default: {
      test: 'steronmg',
      asd: 123,
      asdwq: {
        qwe: 123,
        sd: '132',
      },
    },
    example: [
      123,
      123,
      'qwe',
      {
        test: 'steronmg',
        asd: 123,
        asdwq: {
          qwe: 123,
          sd: '132',
        },
      },
      {
        test: 'steronmg',
        asd: 123,
        asdwq: {
          qwe: 123,
          sd: '132',
        },
      },
      [123, 123, 123],
      {
        test: 'steronmg',
        asd: 123,
        asdwq: {
          qwe: 123,
          sd: '132',
        },
      },
    ],
  })
  stringArray: string[];

  @ApiProperty({
    type: DeleteBodyDto,
  })
  obj: DeleteBodyDto;

  @ApiProperty({ enum: StatusEnum })
  enum: StatusEnum;

  @ApiProperty({
    allOf: [
      { $ref: getSchemaPath(DeleteBodyDto) },
      { $ref: getSchemaPath(PaginatedResponseDto) },
      // {
      //   anyOf: [
      //     { $ref: '#/components/schemas/DeleteBodyDto' },
      //     { $ref: '#/components/schemas/PaginatedResponseDto' },
      //   ],
      // },
    ],
    oneOf: [
      { $ref: getSchemaPath(DeleteBodyDto) },
      { $ref: getSchemaPath(PaginatedResponseDto) },
    ],
  })
  allOf: string;
  @ApiProperty({
    oneOf: [
      { $ref: getSchemaPath(DeleteBodyDto) },
      { $ref: getSchemaPath(PaginatedResponseDto) },
    ],
  })
  oneOf: string;
  @ApiProperty({
    anyOf: [
      { $ref: getSchemaPath(DeleteBodyDto) },
      { $ref: getSchemaPath(PaginatedResponseDto) },
    ],
  })
  anyOf: string;

  @ApiProperty({
    not: { type: 'string' },
  })
  not: string;

  @ApiProperty({
    additionalProperties: { $ref: getSchemaPath(DeleteBodyDto) },
  })
  additionalProperties: string;

  @ApiProperty({
    multipleOf: 1,
  })
  multipleOf: string;
}
