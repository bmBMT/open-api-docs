import type { OpenAPIV3 } from "openapi-types";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import useOpenApiStore from "@/stores/open-api.store";
import { getPropertyType } from "@open-api-docs/common";
import { Fragment, useId } from "react";
import SchemaPropertyRow from "./schema-property-row";
import SchemaViewer from "./schema-viewer";
import SchemaPropertyOfInfo from "./schema-property-match-info";
import SchemaPropertyMatch from "./schema-property-match";

interface ISchemaProperty {
  name?: string;
  property: OpenAPIV3.SchemaObject;
  required?: boolean;
  isLast?: boolean;
  isNested?: boolean;
}

const nestedArrayRegExp = /^array\s*\[(object|array\s*\[(object)\])\]$/;

const SchemaProperty = (props: ISchemaProperty) => {
  const { property, isLast, isNested } = props;

  const id = useId();
  const type = getPropertyType(property);
  const hasNested = type.startsWith("object") || type.match(nestedArrayRegExp);
  const parseRefObject = useOpenApiStore(state => state.parseRefObject);
  const propertiesEntries = Object.entries(property?.properties ?? {});

  return (
    <div className="space-y-4 px-2 relative">
      {hasNested ? (
        <Accordion type="multiple">
          <AccordionItem value={id} className="space-y-2">
            <AccordionTrigger className="py-0">
              <SchemaPropertyRow {...props} />
            </AccordionTrigger>
            <AccordionContent className={cn("border-l-2 pb-0 space-y-2")}>
              {!!propertiesEntries.length ? (
                propertiesEntries.map(([name, prop]) => (
                  <Fragment>
                    <SchemaProperty
                      key={name}
                      name={name}
                      property={parseRefObject!(prop)}
                      required={property.required?.includes(name)}
                      isNested
                    />
                  </Fragment>
                ))
              ) : (
                <SchemaViewer info={property} isNested />
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <Fragment>
          <SchemaPropertyRow {...props} />
          <SchemaPropertyMatch property={property} />
        </Fragment>
      )}
      {!isLast && !isNested && <Separator className="mb-4" />}
    </div>
  );
};

export default SchemaProperty;
