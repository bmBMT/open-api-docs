import useOpenApiStore from "@/stores/open-api.store";
import { BookMarked } from "lucide-react";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";

const DocumentInfo = () => {
  const document = useOpenApiStore(state => state.schema?.document);
  const { title, description, version, contact, termsOfService, license } = document?.info ?? {};

  return (
    <div className="space-y-3">
      <div className="flex space-x-2 items-center">
        <BookMarked />
        <Label className="capitalize text-2xl">{title}</Label>
        <Badge variant="secondary" className="h-5 min-w-5 rounded-sm">
          v{version}
        </Badge>
        <Badge className="h-5 min-w-5 rounded-sm">OAS {document?.openapi}</Badge>
      </div>
      {description && <Label className="text-gray-400">{description}</Label>}
      {(termsOfService || contact || license) && (
        <div className="flex space-x-4">
          {termsOfService && (
            <a href={termsOfService} target="_blank" rel="noopener noreferrer">
              <Label className="text-sm text-blue-500">Terms of service</Label>
            </a>
          )}
          {contact && (
            <a href={contact.url} target="_blank" rel="noopener noreferrer">
              <Label className="text-sm text-blue-500">{contact.name} - Website</Label>
            </a>
          )}
          {contact && (
            <a href={`mailto:${contact.email}`}>
              <Label className="text-sm text-blue-500">Send email to {contact.name}</Label>
            </a>
          )}
          {license && (
            <a href={license.url} target="_blank" rel="noopener noreferrer">
              <Label className="text-sm text-blue-500">{license.name}</Label>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default DocumentInfo;
