import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import useOpenApiStore from "@/stores/open-api.store";
import type { OpenAPIV3 } from "openapi-types";
import SchemaProperty from "./schema-property";
import SchemaPropertyOfInfo from "./schema-property-of-info";
import { Fragment } from "react/jsx-runtime";

interface ISchema {
  info: OpenAPIV3.SchemaObject;
  isNested?: boolean;
}

const SchemaViewer = ({ info, isNested }: ISchema) => {
  const parseRefObject = useOpenApiStore(state => state.parseRefObject)!;
  const propertiesEntries = Object.entries(info?.properties ?? {});
  const isArraySchema = "items" in info;
  const hasComposition = info.allOf || info.anyOf || info.oneOf;

  if (isArraySchema) return <SchemaViewer info={parseRefObject(info.items)} isNested />;
  return (
    <div className="space-y-2">
      {info?.description && <Label className="px-2 text-sm text-gray-400">{info.description}</Label>}
      {!isNested && <Separator />}
      {!!propertiesEntries.length ? (
        propertiesEntries.map(([name, property], index) => (
          <SchemaProperty
            key={name}
            name={name}
            property={parseRefObject(property)}
            required={info.required?.includes(name)}
            isLast={index === propertiesEntries.length - 1}
            isNested={isNested}
          />
        ))
      ) : hasComposition ? (
        <Fragment>
          <SchemaPropertyOfInfo refs={info.allOf} ofType="allOf" />
          <SchemaPropertyOfInfo refs={info.anyOf} ofType="anyOf" />
          <SchemaPropertyOfInfo refs={info.oneOf} ofType="oneOf" />
        </Fragment>
      ) : (
        <Label className="text-gray-400 text-base pl-2">No properties defined</Label>
      )}
    </div>
  );
};

export default SchemaViewer;
