import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import ResponseStatus from "@/components/ui/response-status";
import useOpenApiStore from "@/stores/open-api.store";
import type { OpenAPIV3 } from "openapi-types";
import { useId } from "react";

interface IOperationResponsesItem {
  entry: [string, OpenAPIV3.ReferenceObject | OpenAPIV3.ResponseObject];
}

const OperationResponsesItem = ({ entry }: IOperationResponsesItem) => {
  const [statusCode, responseReference] = entry;
  const parseRefObject = useOpenApiStore(state => state.parseRefObject)!;
  const response = parseRefObject(responseReference);
  const id = useId();

  return (
    <Card className="p-0 rounded-sm overflow-hidden">
      <AccordionItem value={id} className="border-b-0">
        <AccordionTrigger className="px-2 py-1.5 bg-gray-50 dark:bg-accent rounded-none">
          <div className="flex space-x-2">
            <ResponseStatus statusCode={statusCode} />
            <Label className="text-sm font-normal">{response.description}</Label>
          </div>
        </AccordionTrigger>
        <AccordionContent className="py-3 px-2 border-t">
          <div>
            {response.content && (
              <div className="space-y-2">
                <Label className="text-xs font-normal text-gray-600">Response body</Label>
                <div className="bg-white rounded border border-gray-200 p-3">
                  <pre className="text-[12px] text-gray-900 font-mono overflow-x-auto">
                    {JSON.stringify(response.content)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Card>
  );
};

export default OperationResponsesItem;
