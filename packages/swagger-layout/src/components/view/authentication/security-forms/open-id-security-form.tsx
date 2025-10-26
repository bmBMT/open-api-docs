import { OpenAPIV3 } from "openapi-types";

interface IHttpSecurityForm {
  schema: OpenAPIV3.OpenIdSecurityScheme;
}

const OpenIdSecurityForm = ({ schema }: IHttpSecurityForm) => {
  console.log(schema);
  
  return <div>openId</div>;
};

export default OpenIdSecurityForm;
