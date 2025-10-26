import type { HttpSecuritySchema } from "@/types/http-security-schema.type";
import type { OpenAPIV3 } from "openapi-types";
import AuthenticationNotSupported from "../../authentication-not-supported";
import BearerSchemaSecurityForm from "./bearer-schema-security-form";
import BasicSchemaSecurityForm from "./basic-schema-security-form";

interface IHttpTypeSecurityForm {
  schema: OpenAPIV3.HttpSecurityScheme;
}

const HttpTypeSecurityForm = ({ schema }: IHttpTypeSecurityForm) => {
  switch (schema.scheme as HttpSecuritySchema) {
    case "bearer":
      return <BearerSchemaSecurityForm schema={schema} />;
    case "basic":
      return <BasicSchemaSecurityForm schema={schema} />;
    default:
      return <AuthenticationNotSupported />;
  }
};

export default HttpTypeSecurityForm;
