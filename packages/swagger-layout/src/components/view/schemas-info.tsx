import { AccordionItem } from "@radix-ui/react-accordion";
import { Accordion, AccordionContent, AccordionTrigger } from "../ui/accordion";
import { Card } from "../ui/card";
import { Label } from "../ui/label";

const SchemasInfo = () => {
  return (
    <Card className="rounded-md shadow-sm p-2">
      <Accordion type="multiple">
        <AccordionItem value="schemas">
          <AccordionTrigger className="py-1.5 rounded-xs">
            <Label>Schemas</Label>
          </AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default SchemasInfo;
