import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { getOperationAccordionValue } from "@/lib/get-operation-accordion-value";
import type { GroupedOperationObject } from "@open-api-docs/common";
import OperationDescription from "./operation-description";
import { cn } from "@/lib/utils";
import { Fragment } from "react/jsx-runtime";
import OperationDeprecatedTooltip from "./operation-deprecated-tooltip";
import OperationTrigger from "./operation-trigger";
import { Label } from "@/components/ui/label";

interface IOperation {
  tag: string;
  schema: GroupedOperationObject;
}

const Operation = ({ tag, schema }: IOperation) => {
  const { method, path, summary, operationId, description, externalDocs, deprecated } = schema;
  const id = getOperationAccordionValue(tag, operationId);

  return (
    <Card id={id} className={cn("p-2 rounded-lg", deprecated && "opacity-60")}>
      <AccordionItem value={id}>
        <AccordionTrigger
          className="bg-accent px-2 py-1.5"
          external={<Fragment>{deprecated && <OperationDeprecatedTooltip />}</Fragment>}
        >
          <OperationTrigger method={method} path={path} summary={summary} deprecated={deprecated} />
        </AccordionTrigger>
        <AccordionContent className="mt-4 mx-2 space-y-2">
          {deprecated && <Label className="text-gray-60000">Warning: Deprecated</Label>}
          <OperationDescription description={description} externalDocs={externalDocs} />
        </AccordionContent>
      </AccordionItem>
    </Card>
  );
};

export default Operation;
