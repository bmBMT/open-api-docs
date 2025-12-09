import { AccordionItem } from "@radix-ui/react-accordion";
import { Accordion, AccordionContent, AccordionTrigger } from "../../ui/accordion";
import { Card } from "../../ui/card";
import { Label } from "../../ui/label";
import useOpenApiStore from "@/stores/open-api.store";
import SchemaViewer from "./schema-viewer";

const GroupedSchemas = () => {
  const schemas = useOpenApiStore(state => state.schema?.document.components?.schemas);
  const parseRefObject = useOpenApiStore(state => state.parseRefObject);

  if (!schemas) return;
  return (
    <Card className="rounded-md shadow-sm p-2">
      <Accordion type="multiple">
        <AccordionItem value="schemas">
          <AccordionTrigger className="py-1.5 rounded-xs">
            <Label>Schemas</Label>
          </AccordionTrigger>
          <AccordionContent className="p-4 space-y-4">
            {Object.entries(schemas).map(([schemaName, schemaInfo]) => (
              <Card key={schemaName} className="p-0 rounded-sm bg-accent">
                <AccordionItem value={schemaName}>
                  <AccordionTrigger className="p-2">{schemaName}</AccordionTrigger>
                  <AccordionContent>
                    <SchemaViewer info={parseRefObject!(schemaInfo)} />
                  </AccordionContent>
                </AccordionItem>
              </Card>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default GroupedSchemas;
