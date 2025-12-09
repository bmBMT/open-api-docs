import type { OpenAPIV3 } from "openapi-types";
import { Fragment } from "react/jsx-runtime";
import SchemaPropertyMatchInfo from "./schema-property-match-info";

interface ISchemaPropertyOfInfo {
  property: OpenAPIV3.SchemaObject;
}

const SchemaPropertyMatch = ({ property }: ISchemaPropertyOfInfo) => {
  return (
    <Fragment>
      {property.allOf && <SchemaPropertyMatchInfo refs={property.allOf} ofType="allOf" />}
      {property.anyOf && <SchemaPropertyMatchInfo refs={property.anyOf} ofType="anyOf" />}
      {property.oneOf && <SchemaPropertyMatchInfo refs={property.oneOf} ofType="oneOf" />}
      {property.not && <SchemaPropertyMatchInfo refs={property.not} ofType="not" />}
      {typeof property.additionalProperties !== "boolean" && (
        <SchemaPropertyMatchInfo refs={property.additionalProperties} ofType="additionalProperties" />
      )}
    </Fragment>
  );
};

export default SchemaPropertyMatch;
