import type { OpenAPIV3 } from "openapi-types";
import { Map } from "immutable";

export const hasReference = (object: OpenAPIV3.ReferenceObject | any = {}) => {
  return "$ref" in object;
};

export const makeParseRefObject = (document: OpenAPIV3.Document) => {
  const map = Map(document);

  const parseRefObject = <T extends object>(object: OpenAPIV3.ReferenceObject | T): T => {
    if (hasReference(object)) {
      const paths = (object as OpenAPIV3.ReferenceObject).$ref.slice(2).split("/");

      return map.getIn(paths, Map()) as any;
    }

    return object as T;
  };

  return parseRefObject;
};
