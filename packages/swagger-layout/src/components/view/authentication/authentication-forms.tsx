import type { OpenAPIV3 } from "openapi-types";
import HttpSecurityForm from "./security-forms/http-type/http-type-security-form";
import OpenIdSecurityForm from "./security-forms/open-id-security-form";
import OAuth2SecurityForm from "./security-forms/oauth2-security-form";
import ApiKeySecurityForm from "./security-forms/api-key-security-form";
import useSwaggerStore from "@/stores/swagger.store";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const renderSecurityForm = (schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SecuritySchemeObject) => {
  if ((schema as OpenAPIV3.ReferenceObject).$ref) return;

  const schemaObject = schema as OpenAPIV3.SecuritySchemeObject;

  switch (schemaObject.type) {
    case "http":
      return <HttpSecurityForm schema={schema as OpenAPIV3.HttpSecurityScheme} />;
    case "apiKey":
      return <ApiKeySecurityForm schema={schema as OpenAPIV3.ApiKeySecurityScheme} />;
    case "oauth2":
      return <OAuth2SecurityForm schema={schema as OpenAPIV3.OAuth2SecurityScheme} />;
    case "openIdConnect":
      return <OpenIdSecurityForm schema={schema as OpenAPIV3.OpenIdSecurityScheme} />;
    default:
      return;
  }
};

const AuthenticationForms = () => {
  const schema = useSwaggerStore(state => state.schema?.document);

  return (
    <Accordion type="multiple" className="w-full">
      {Object.entries(schema?.components?.securitySchemes ?? {}).map(([name, schema]) => (
        <AccordionItem key={name} value={name}>
          <AccordionTrigger className="capitalize">{name}</AccordionTrigger>
          <AccordionContent>{renderSecurityForm(schema)}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AuthenticationForms;
