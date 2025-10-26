import type { IAuthProps } from "@/types/auth-component-props.type";
import { OpenAPIV3 } from "openapi-types";

const OAuth2SecurityForm = ({ schema }: IAuthProps<OpenAPIV3.OAuth2SecurityScheme>) => {
  console.log(schema);

  return <div>OAuth2</div>;
};

export default OAuth2SecurityForm;
