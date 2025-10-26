import type { IAuthProps } from "@/types/auth-component-props.type";
import { OpenAPIV3 } from "openapi-types";

const OpenIdSecurityForm = ({ schema }: IAuthProps<OpenAPIV3.OpenIdSecurityScheme>) => {
  console.log(schema);

  return <div>openId</div>;
};

export default OpenIdSecurityForm;
