import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import useOpenApiStore from "@/stores/open-api.store";
import { groupOperationsByMethod } from "@open-api-docs/common";
import Operation from "./operation";
import { useEffect, useState } from "react";

const anchor = window.location.hash.slice(1);

const GroupedOperations = () => {
  const openApiDocument = useOpenApiStore(state => state.schema?.document);
  const groupedOperations = groupOperationsByMethod(openApiDocument!.paths);
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
      if (element) {
        if ("scrollRestoration" in window.history) {
          window.history.scrollRestoration = "manual";
        }

        window.scrollTo(0, element.offsetTop - 10);
      }
    }
  }, []);

  return (
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
  );
};

export default GroupedOperations;
