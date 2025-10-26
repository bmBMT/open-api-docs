import { OpenAPIV3 } from "openapi-types";

interface IHttpSecurityForm {
  schema: OpenAPIV3.ApiKeySecurityScheme;
}

const ApiKeySecurityForm = ({ schema }: IHttpSecurityForm) => {
  console.log(schema);
  
  return <div>apiKey</div>;
};

export default ApiKeySecurityForm;
