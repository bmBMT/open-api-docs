import { AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { OpenAPIV3 } from "openapi-types";
import { Fragment } from "react/jsx-runtime";
import OperationDeprecatedTooltip from "./operation-deprecated-tooltip";
import OperationAuth from "./operation-auth";

interface IOperationTrigger {
  deprecated?: boolean;
  method: OpenAPIV3.HttpMethods;
  path: string;
  summary?: string;
  security?: OpenAPIV3.SecurityRequirementObject[];
}

const OperationTrigger = ({ method, deprecated, path, summary, security }: IOperationTrigger) => {
  return (
    <AccordionTrigger
      className="bg-accent px-2 py-1.5"
      external={
        <Fragment>
          {deprecated && <OperationDeprecatedTooltip />}
          {security && <OperationAuth security={security} />}
        </Fragment>
      }
    >
      <div className="flex space-x-2">
        <Badge
          className="rounded-sm text-sm uppercase px-3 font-semibold"
          operationMethod={deprecated ? "trace" : method}
        >
          {method}
        </Badge>
        <Label className={cn("font-mono", deprecated && "line-through")}>{path}</Label>
        {summary && <Label className="text-sm font-normal">{summary}</Label>}
      </div>
    </AccordionTrigger>
  );
};

export default OperationTrigger;
