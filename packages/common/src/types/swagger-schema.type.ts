import type { OpenAPIV3 } from "openapi-types";

export interface SwaggerSchemaType {
  globalPrefix?: string;
  document: OpenAPIV3.Document;
}
