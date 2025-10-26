import type { OpenAPIV3 } from "openapi-types";

export type HttpBearerAuthValue = string;
export type HttpBasicAuthValue = {
  username: string;
  password: string;
};

export type StoredHttpAuth<T extends HttpBearerAuthValue | HttpBasicAuthValue> = {
  value: T;
  schema: OpenAPIV3.HttpSecurityScheme;
};

export type StoredAuth = StoredHttpAuth<HttpBearerAuthValue> | StoredHttpAuth<HttpBasicAuthValue>;
