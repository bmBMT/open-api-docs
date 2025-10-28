import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import useOpenApiStore from "@/stores/open-api.store";
import { groupOperationsByAlpha, groupOperationsByMethod } from "@open-api-docs/common";
import Operation from "./operation";
import { useEffect, useState } from "react";
import type Scrollbars from "react-custom-scrollbars-2";
import ServersSelect from "../servers-select";
import useServerStore from "@/stores/server.store";

const anchor = window.location.hash.slice(1);

interface IGroupedOperations {
  scrollbarRef: React.RefObject<Scrollbars | null>;
}

const GroupedOperations = ({ scrollbarRef }: IGroupedOperations) => {
  const { selectedServer, setSelectedServer } = useServerStore();
  const operationsSorter = useOpenApiStore(state => state.schema?.operationsSorter);
  const openApiDocument = useOpenApiStore(state => state.schema?.document);
  const sortFunction = operationsSorter === "alpha" ? groupOperationsByAlpha : groupOperationsByMethod;
  const groupedOperations = sortFunction(openApiDocument!.paths);
  const [accordionValue, setAccordionValue] = useState([...Object.keys(groupedOperations), anchor]);

  const onValueChange = (value: string[]) => {
    const isOpenedSomeAccordion = value.length > accordionValue.length;

    if (isOpenedSomeAccordion) {
      window.history.replaceState(null, "", `#${value.at(-1)}`);
    } else window.history.replaceState(null, "", "/");

    setAccordionValue(value);
  };

  useEffect(() => {
    if (anchor) {
      const element = document.getElementById(anchor);
      if (element) scrollbarRef.current?.scrollTop(element.offsetTop - 10);
    }
  }, [scrollbarRef]);

  return (
    <div className="space-y-1">
      {openApiDocument?.servers && (
        <ServersSelect servers={openApiDocument.servers} selected={selectedServer} onServerChange={setSelectedServer} />
      )}
      <Accordion type="multiple" value={accordionValue} onValueChange={onValueChange}>
        {Object.entries(groupedOperations).map(([tag, operations]) => (
          <AccordionItem key={tag} id={tag} value={tag}>
            <AccordionTrigger className="text-lg">{tag}</AccordionTrigger>
            <AccordionContent className="space-y-4">
              {operations.map((operation, index) => (
                <Operation key={index} tag={tag} schema={operation} />
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default GroupedOperations;
