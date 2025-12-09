import SchemaMustMatch from "@/components/view/schemas/schema-must-match";
import { cn } from '@/lib/utils';
import useOpenApiStore from "@/stores/open-api.store";
import type { SchemaOfTypes } from "@/types/schema-of-types";
import { getRefName } from "@open-api-docs/common";
import type { OpenAPIV3 } from "openapi-types";
import SchemaProperty from "./schema-property";
import { getMustMatchVariantContent } from '@/lib/schema-must-match-variants';

interface ISchemaPropertyOfInfo {
  refs?: Array<OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject>;
  ofType: SchemaOfTypes;
}

const SchemaPropertyOfInfo = ({ refs, ofType }: ISchemaPropertyOfInfo) => {
  if (!refs) return;

  const parseRefObject = useOpenApiStore(state => state.parseRefObject)!;
	const content = getMustMatchVariantContent(ofType);

  return (
    <div className="ml-2">
      <SchemaMustMatch variant={ofType} />
      <div className={cn('border-l-2', content.border)}>
        {refs.map(entity => (
          <SchemaProperty
            name={getRefName(entity)}
            property={parseRefObject<OpenAPIV3.SchemaObject>(entity)}
            isNested
          />
        ))}
      </div>
    </div>
  );
};

export default SchemaPropertyOfInfo;
