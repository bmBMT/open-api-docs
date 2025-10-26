import type { IAuthProps } from "@/types/auth-component-props.type";
import { OpenAPIV3 } from "openapi-types";

const ApiKeySecurityForm = ({ schema }: IAuthProps<OpenAPIV3.ApiKeySecurityScheme>) => {
  console.log(schema);

  return <div>apiKey</div>;
};

export default ApiKeySecurityForm;
