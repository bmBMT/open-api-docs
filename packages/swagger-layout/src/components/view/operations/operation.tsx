import { AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { getOperationAccordionValue } from "@/lib/get-operation-accordion-value";
import type { GroupedOperationObject } from "@open-api-docs/common";
import OperationDescription from "./operation-description";
import { cn } from "@/lib/utils";
import OperationTrigger from "./operation-trigger";
import { Label } from "@/components/ui/label";

interface IOperation {
  tag: string;
  schema: GroupedOperationObject;
}

const Operation = ({ tag, schema }: IOperation) => {
  const { method, path, summary, operationId, description, externalDocs, deprecated, security } = schema;
  const id = getOperationAccordionValue(tag, operationId);

  return (
    <Card id={id} className={cn("p-2 rounded-lg", deprecated && "opacity-60")}>
      <AccordionItem value={id}>
        <OperationTrigger method={method} path={path} summary={summary} deprecated={deprecated} security={security} />
        <AccordionContent className="mt-4 mx-2 space-y-2">
          {deprecated && <Label className="text-gray-60000">Warning: Deprecated</Label>}
          <OperationDescription description={description} externalDocs={externalDocs} />
        </AccordionContent>
      </AccordionItem>
    </Card>
  );
};

export default Operation;
