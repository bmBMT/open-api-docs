import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { OpenAPIV3 } from "openapi-types";

interface IOperationTrigger {
  deprecated?: boolean;
  method: OpenAPIV3.HttpMethods;
  path: string;
  summary?: string;
}

const OperationTrigger = ({ method, deprecated, path, summary }: IOperationTrigger) => {
  return (
    <div className="flex space-x-2">
      <Badge
        className="rounded-sm text-sm uppercase px-3 font-semibold"
        operationMethod={deprecated ? "trace" : method}
      >
        {method}
      </Badge>
      <Label className={cn("font-mono", deprecated && "line-through")}>{path}</Label>
      {summary && <Label className="text-xs font-normal">{summary}</Label>}
    </div>
  );
};

export default OperationTrigger;
