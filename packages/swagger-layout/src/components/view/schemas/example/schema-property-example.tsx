import { Label } from "@/components/ui/label";
import { isObject } from "@/lib/is-object";
import { cn } from "@/lib/utils";
import SchemaPropertyExampleContent from "./schema-property-example-content";

interface ISchemaPropertyExample {
  example?: unknown;
  label: string;
}

const SchemaPropertyExample = ({ example, label }: ISchemaPropertyExample) => {
  if (!example) return;
  return (
    <div className={cn("gap-2 flex-wrap items-center", !isObject(example) && "flex")}>
      <Label className="text-gray-400 text-sm">{label}:</Label>
      <SchemaPropertyExampleContent example={example} />
    </div>
  );
};

export default SchemaPropertyExample;
