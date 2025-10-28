import type { OpenAPIV3 } from "openapi-types";
import type { OperationsSorterType } from './operations-sorter.type';

export interface OpenApiDocumentType {
  globalPrefix?: string;
  operationsSorter?: OperationsSorterType;
  document: OpenAPIV3.Document;
}
