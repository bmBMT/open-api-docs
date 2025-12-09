import SchemaPropertyMainInfo from "./schema-property-main-info";
import SchemaPropertyExample from "./example/schema-property-example";
import SchemaPropertySubInfo from "./schema-property-sub-info";
import SchemaPropertyConstraints from "./schema-property-constraints";
import { cn } from "@/lib/utils";
import type { OpenAPIV3 } from "openapi-types";

interface ISchemaPropertyRow {
  name: string;
  property: OpenAPIV3.SchemaObject;
  required?: boolean;
}

const SchemaPropertyRow = (props: ISchemaPropertyRow) => {
  const { property } = props;

  return (
    <div className={cn("space-y-1", property.deprecated && "opacity-50")}>
      <SchemaPropertyMainInfo {...props} />
      <SchemaPropertySubInfo property={property} />
      <SchemaPropertyConstraints property={property} />
      {property.default && <SchemaPropertyExample example={property.default} label="Default" />}
      <SchemaPropertyExample example={property.example} label="Example" />
    </div>
  );
};

export default SchemaPropertyRow;
