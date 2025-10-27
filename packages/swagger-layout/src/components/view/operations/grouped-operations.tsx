import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import useOpenApiStore from "@/stores/open-api.store";
import { groupOperationsByMethod } from "@open-api-docs/common";

const GroupedOperations = () => {
  const openApiDocument = useOpenApiStore(state => state.schema?.document);
  const groupedOperations = groupOperationsByMethod(openApiDocument!.paths);

  return (
    <Accordion type="multiple" defaultValue={Object.keys(groupedOperations)}>
      {Object.entries(groupedOperations).map(([tag]) => (
        <AccordionItem key={tag} value={tag}>
          <AccordionTrigger className="text-lg">{tag}</AccordionTrigger>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default GroupedOperations;
