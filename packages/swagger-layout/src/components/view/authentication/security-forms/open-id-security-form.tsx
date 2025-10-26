import type { IAuthProps } from "@/types/auth-component-props.type";
import { OpenAPIV3 } from "openapi-types";
import AuthenticationNotSupported from "../authentication-not-supported";

const OpenIdSecurityForm = ({ schema }: IAuthProps<OpenAPIV3.OpenIdSecurityScheme>) => {
  console.log(schema);

  return <AuthenticationNotSupported />;
};

export default OpenIdSecurityForm;
