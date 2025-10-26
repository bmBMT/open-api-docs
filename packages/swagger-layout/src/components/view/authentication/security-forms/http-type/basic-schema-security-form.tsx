import { OpenAPIV3 } from "openapi-types";

interface IBasicSchemaSecurityForm {
  schema: OpenAPIV3.HttpSecurityScheme;
}

const BasicSchemaSecurityForm = ({ schema }: IBasicSchemaSecurityForm) => {
  console.log(schema.scheme);

  return <div>http - basic</div>;
};

export default BasicSchemaSecurityForm;
