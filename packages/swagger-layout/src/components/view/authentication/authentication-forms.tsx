import type { OpenAPIV3 } from "openapi-types";
import HttpSecurityForm from "./security-forms/http-type/http-type-security-form";
import OpenIdSecurityForm from "./security-forms/open-id-security-form";
import OAuth2SecurityForm from "./security-forms/oauth2-security-form";
import ApiKeySecurityForm from "./security-forms/api-key-security-form";
import useSwaggerStore from "@/stores/swagger.store";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import useAuthStore from "@/stores/auth.store";
import PerfectScrollbar from "react-perfect-scrollbar";

const renderSecurityForm = (name: string, schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SecuritySchemeObject) => {
  if ((schema as OpenAPIV3.ReferenceObject).$ref) return;

  const schemaObject = schema as OpenAPIV3.SecuritySchemeObject;

  switch (schemaObject.type) {
    case "http":
      return <HttpSecurityForm name={name} schema={schema as OpenAPIV3.HttpSecurityScheme} />;
    case "apiKey":
      return <ApiKeySecurityForm name={name} schema={schema as OpenAPIV3.ApiKeySecurityScheme} />;
    case "oauth2":
      return <OAuth2SecurityForm name={name} schema={schema as OpenAPIV3.OAuth2SecurityScheme} />;
    case "openIdConnect":
      return <OpenIdSecurityForm name={name} schema={schema as OpenAPIV3.OpenIdSecurityScheme} />;
    default:
      return;
  }
};

interface IAuthenticationForms {
  scrollbarRef?: React.RefObject<PerfectScrollbar | null>;
}

const AuthenticationForms = ({ scrollbarRef }: IAuthenticationForms) => {
  const schema = useSwaggerStore(state => state.schema?.document);
  const storage = useAuthStore(state => state.storage);
  const savedAuthNames = Object.keys(storage);
  const securitySchemeNames = Object.keys(schema?.components?.securitySchemes ?? {});

  const updateScrollbar = () => {
    if (!scrollbarRef?.current) return;
    scrollbarRef?.current.updateScroll();
  };

  return (
    <Accordion
      type="multiple"
      className="w-full"
      defaultValue={securitySchemeNames.filter(name => !savedAuthNames.includes(name))}
    >
      {Object.entries(schema?.components?.securitySchemes ?? {}).map(([name, schema]) => (
        <AccordionItem key={name} value={name} onClick={updateScrollbar}>
          <AccordionTrigger className="capitalize">{name}</AccordionTrigger>
          <AccordionContent>{renderSecurityForm(name, schema)}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AuthenticationForms;
