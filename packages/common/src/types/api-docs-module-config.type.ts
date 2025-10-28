import type { OperationsSorterType } from "./operations-sorter.type";

export interface IApiDocsModuleConfig {
  useGlobalPrefix?: boolean;
  operationsSorter?: OperationsSorterType;
}
