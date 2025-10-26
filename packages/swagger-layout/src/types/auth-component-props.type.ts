import type { OpenAPIV3 } from "openapi-types";

export interface IAuthProps<T extends OpenAPIV3.SecuritySchemeObject> {
  name: string;
  schema: T;
}
