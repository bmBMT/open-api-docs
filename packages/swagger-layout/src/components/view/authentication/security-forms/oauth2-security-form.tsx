import type { IAuthProps } from "@/types/auth-component-props.type";
import { OpenAPIV3 } from "openapi-types";
import AuthenticationNotSupported from "../authentication-not-supported";

const OAuth2SecurityForm = ({ schema }: IAuthProps<OpenAPIV3.OAuth2SecurityScheme>) => {
  console.log(schema.type);

  return <AuthenticationNotSupported />;
};

export default OAuth2SecurityForm;
