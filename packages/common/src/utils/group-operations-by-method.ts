import { OpenAPIV3 } from "openapi-types";
import type { GroupOfOperations } from "../types";
import { groupOperationsByAlpha } from "./group-operations-by-alpha";

export const groupOperationsByMethod = (paths: OpenAPIV3.PathsObject): GroupOfOperations => {
  const group: GroupOfOperations = groupOperationsByAlpha(paths);
  const methods = Object.values(OpenAPIV3.HttpMethods);

  for (const tag in group) {
    group[tag]?.sort((a, b) => methods.indexOf(a.method) - methods.indexOf(b.method));
  }

  return group;
};
