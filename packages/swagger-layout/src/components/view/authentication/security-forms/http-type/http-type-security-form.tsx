import type { HttpSecuritySchema } from "@/types/http-security-schema.type";
import type { OpenAPIV3 } from "openapi-types";
import AuthenticationNotSupported from "../../authentication-not-supported";
import BearerSchemaSecurityForm from "./bearer-schema-security-form";
import BasicSchemaSecurityForm from "./basic-schema-security-form";
import type { IAuthProps } from "@/types/auth-component-props.type";

const HttpTypeSecurityForm = ({ name, schema }: IAuthProps<OpenAPIV3.HttpSecurityScheme>) => {
  switch (schema.scheme as HttpSecuritySchema) {
    case "bearer":
      return <BearerSchemaSecurityForm name={name} schema={schema} />;
    case "basic":
      return <BasicSchemaSecurityForm name={name} schema={schema} />;
    default:
      return <AuthenticationNotSupported />;
  }
};

export default HttpTypeSecurityForm;
