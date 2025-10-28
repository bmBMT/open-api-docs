import { AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { getOperationAccordionValue } from "@/lib/get-operation-accordion-value";
import type { GroupedOperationObject } from "@open-api-docs/common";
import OperationDescription from "./operation-description";
import { cn } from "@/lib/utils";
import OperationTrigger from "./operation-trigger";
import { Label } from "@/components/ui/label";
import ServersSelect from "../servers-select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToggle } from "usehooks-ts";
// import useServerStore from "@/stores/server.store";

interface IOperation {
  tag: string;
  schema: GroupedOperationObject;
}

const Operation = ({ tag, schema }: IOperation) => {
  const { method, path, summary, operationId, description, externalDocs, deprecated, security, servers } = schema;
  // const selectedGlobalServer = useServerStore(state => state.selectedServer);
  const [server, setServer] = useState(servers?.at(0)?.url);
  const id = getOperationAccordionValue(tag, operationId);
  const [tryOperation, toggleTryOperation] = useToggle();
  const showServersSelector = servers && server;

  return (
    <Card id={id} className={cn("p-2 rounded-lg", deprecated && "opacity-60")}>
      <AccordionItem value={id}>
        <OperationTrigger method={method} path={path} summary={summary} deprecated={deprecated} security={security} />
        <AccordionContent className="mt-4 mx-2 space-y-2">
          {deprecated && <Label className="text-gray-60000">Warning: Deprecated</Label>}
          <OperationDescription description={description} externalDocs={externalDocs} />
          <hr className='my-4' />
          <div className={cn("flex items-end", showServersSelector ? "justify-between" : "justify-end")}>
            {showServersSelector && <ServersSelect servers={servers} selected={server} onServerChange={setServer} />}
            <Button onClick={toggleTryOperation} variant={tryOperation ? "destructive" : "secondary"}>
              {tryOperation ? "Cancel" : "Try it out"}
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Card>
  );
};

export default Operation;
