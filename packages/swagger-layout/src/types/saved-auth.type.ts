import type { OpenAPIV3 } from "openapi-types";

export type DefaultAuthValue = string;
export type HttpBasicAuthValue = {
  username: string;
  password: string;
};

export type StoredHttpAuth<T extends DefaultAuthValue | HttpBasicAuthValue> = {
  value: T;
  schema: OpenAPIV3.HttpSecurityScheme;
};

export type StoredApiKeyAuth = {
  value: string;
  schema: OpenAPIV3.ApiKeySecurityScheme;
};

export type StoredAuth = StoredHttpAuth<DefaultAuthValue> | StoredHttpAuth<HttpBasicAuthValue> | StoredApiKeyAuth;
