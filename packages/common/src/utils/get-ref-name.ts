import type { OpenAPIV3 } from "openapi-types";
import { hasReference } from "./parse-ref-object";

export const getRefName = (obj: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject) => {
  if (!hasReference(obj)) return 'Anonymus';

  const splitedString = (obj as OpenAPIV3.ReferenceObject).$ref.split("/");

  return splitedString[splitedString.length - 1] || "Anonymus";
};
