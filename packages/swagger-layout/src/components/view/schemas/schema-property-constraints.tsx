import { Badge } from "@/components/ui/badge";
import { Label } from "@radix-ui/react-label";
import type { OpenAPIV3 } from "openapi-types";
import { Fragment } from "react/jsx-runtime";

interface ISchemaPropertyConstraints {
  property: OpenAPIV3.SchemaObject;
}

const SchemaPropertyConstraints = ({ property }: ISchemaPropertyConstraints) => {
  const {
    minLength,
    maxLength,
    minimum,
    maximum,
    minItems,
    maxItems,
    exclusiveMinimum,
    exclusiveMaximum,
    pattern,
    maxProperties,
    xml,
    multipleOf,
  } = property;

  return (
    <Fragment>
      {(minLength !== undefined || maxLength !== undefined) && (
        <div className="text-gray-600">
          <Label className="text-gray-500">Length: </Label>
          {minLength !== undefined && <Label>min: {minLength}</Label>}
          {minLength !== undefined && maxLength !== undefined && ", "}
          {maxLength !== undefined && <Label>max: {maxLength}</Label>}
        </div>
      )}
      {multipleOf !== undefined && (
        <div className="text-gray-600">
          <Label className="text-gray-500">Multiple of: </Label>
          <Label className="px-1.5 py-0.5 bg-purple-50 text-purple-800 rounded text-xs">{multipleOf}</Label>
        </div>
      )}
      {(minimum !== undefined || maximum !== undefined) && (
        <div className="text-gray-600">
          <Label className="text-gray-500">Range: </Label>
          {minimum !== undefined && (
            <Fragment>
              {exclusiveMinimum ? "> " : ">= "}
              {minimum}
            </Fragment>
          )}
          {minimum !== undefined && maximum !== undefined && " ... "}
          {maximum !== undefined && (
            <Fragment>
              {exclusiveMaximum ? "< " : "<= "}
              {maximum}
            </Fragment>
          )}
        </div>
      )}
      {(minItems !== undefined || maxItems !== undefined) && (
        <div className="text-gray-600">
          <Label className="text-gray-500">Items: </Label>
          {minItems !== undefined && <Label>min: {minItems}</Label>}
          {minItems !== undefined && maxItems !== undefined && ", "}
          {maxItems !== undefined && <Label>max: {maxItems}</Label>}
        </div>
      )}
      {maxProperties !== undefined && (
        <div className="text-gray-600">
          <Label className="text-gray-500">Max properties: </Label>
          <Label>{maxProperties}</Label>
        </div>
      )}
      {pattern && (
        <div>
          <Label className="text-gray-500">Pattern: </Label>
          <Badge variant="outline" className="border-gray-300 bg-gray-100 rounded-md text-gray-700">
            {pattern}
          </Badge>
        </div>
      )}
      {xml && (
        <Badge className="bg-amber-50 border-amber-200 rounded-md text-amber-900">
          <Label className="text-amber-700">XML: </Label>
          {xml.name && `name="${xml.name}" `}
          {xml.namespace && `namespace="${xml.namespace}"`}
          {xml.namespace && `, namespace="${xml.namespace}"`}
          {xml.prefix && `, prefix="${xml.prefix}"`}
          {xml.attribute && `, attribute=true`}
          {xml.wrapped && `, wrapped=true`}
        </Badge>
      )}
    </Fragment>
  );
};

export default SchemaPropertyConstraints;
