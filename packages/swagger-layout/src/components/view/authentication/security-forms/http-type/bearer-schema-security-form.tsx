import { OpenAPIV3 } from "openapi-types";

interface IBearerSchemaSecurityForm {
  schema: OpenAPIV3.HttpSecurityScheme;
}

const BearerSchemaSecurityForm = ({ schema }: IBearerSchemaSecurityForm) => {
  console.log(schema.scheme);

  return <div>http - bearer</div>;
};

export default BearerSchemaSecurityForm;
