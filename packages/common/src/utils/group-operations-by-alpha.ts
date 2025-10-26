import { OpenAPIV3 } from "openapi-types";
import type { GroupOfOperations } from "../types";

export const groupOperationsByAlpha = (paths: OpenAPIV3.PathsObject): GroupOfOperations => {
  const group: GroupOfOperations = {};

  for (const path in paths) {
    const operation = paths[path];

    if (!operation) continue;

    for (const method of Object.values(OpenAPIV3.HttpMethods)) {
      const endpoint = operation[method];

      if (!endpoint) continue;

      for (const tag of endpoint.tags || []) {
        if (!group[tag]) group[tag] = [];

        group[tag].push({
          method,
          path,
          ...endpoint,
        });
      }
    }
  }

  return group;
};
