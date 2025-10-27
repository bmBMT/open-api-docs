import type { OpenAPIV3 } from "openapi-types";

type OperationsSorterType = "alpha" | "method";

export interface OpenApiDocumentType {
  globalPrefix?: string;
  operationsSorter?: OperationsSorterType;
  document: OpenAPIV3.Document;
}
