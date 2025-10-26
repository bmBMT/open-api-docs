import { OpenAPIV3 } from "openapi-types";

interface IHttpSecurityForm {
  schema: OpenAPIV3.OAuth2SecurityScheme;
}

const OAuth2SecurityForm = ({ schema }: IHttpSecurityForm) => {
  console.log(schema);

  return <div>OAuth2</div>;
};

export default OAuth2SecurityForm;
