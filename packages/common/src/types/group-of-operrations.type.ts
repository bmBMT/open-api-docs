import type { OpenAPIV3 } from "openapi-types";

export interface GroupedOperationObject extends OpenAPIV3.OperationObject {
  path: string;
  method: OpenAPIV3.HttpMethods;
}

export type GroupOfOperations = {
  [tag: string]: GroupedOperationObject[];
};
