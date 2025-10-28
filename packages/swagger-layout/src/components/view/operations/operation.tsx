import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { getOperationAccordionValue } from "@/lib/get-operation-accordion-value";
import type { GroupedOperationObject } from "@open-api-docs/common";

interface IOperation {
  tag: string;
  schema: GroupedOperationObject;
}

const Operation = ({ tag, schema }: IOperation) => {
  const { method, path, summary, operationId } = schema;
  const id = getOperationAccordionValue(tag, operationId);

  return (
    <Card id={id} className="shadow-none p-2 rounded-lg">
      <AccordionItem value={id}>
        <AccordionTrigger className="hover:no-underline cursor-pointer bg-accent px-2 py-1.5">
          <div className="flex space-x-2">
            <Badge className="rounded-sm text-sm uppercase px-3 font-semibold" operationMethod={method}>
              {method}
            </Badge>
            <Label className="font-mono">{path}</Label>
            <Label className="text-xs font-normal">{summary}</Label>
          </div>
        </AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>
    </Card>
  );
};

export default Operation;
