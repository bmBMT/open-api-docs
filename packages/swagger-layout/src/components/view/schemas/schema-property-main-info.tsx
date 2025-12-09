import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ExternalLink, Lock, OctagonAlert, Pencil } from "lucide-react";
import type { OpenAPIV3 } from "openapi-types";

interface ISchemaPropertyMainInfo {
  name?: string;
  property: OpenAPIV3.SchemaObject;
  required?: boolean;
}

const SchemaPropertyMainInfo = ({ name, property, required }: ISchemaPropertyMainInfo) => {
  return (
    <div className="flex justify-between">
      <div className="space-y-1">
        <div className="flex space-x-2 items-center">
          {name && <Label className={cn("text-sm", property.deprecated && "line-through")}>{name}</Label>}
          {required && (
            <Badge
              variant="outline"
              className="bg-red-50 dark:bg-red-200 text-red-700 border-red-200 dark:border-red-300 rounded-md"
            >
              <Label className="text-xs">required</Label>
            </Badge>
          )}
          {property.readOnly && (
            <Badge
              variant="outline"
              className="bg-gray-100 dark:bg-gray-200 text-gray-600 border-gray-300 dark:border-gray-400 rounded-md"
            >
              <Lock />
              <Label className="text-xs">read-only</Label>
            </Badge>
          )}
          {property.deprecated && (
            <Badge
              variant="outline"
              className="bg-gray-100 dark:bg-gray-300 text-gray-600 border-gray-300 dark:border-gray-400 rounded-md"
            >
              <OctagonAlert />
              <Label className="text-xs">deprecated</Label>
            </Badge>
          )}
          {property.nullable && (
            <Badge
              variant="outline"
              className="bg-gray-100 dark:bg-gray-300 text-gray-600 border-gray-300 dark:border-gray-400 rounded-md"
            >
              <Label className="text-xs">nullable</Label>
            </Badge>
          )}
          {property.writeOnly && (
            <Badge
              variant="outline"
              className="bg-gray-100 dark:bg-gray-300 text-gray-600 border-gray-300 dark:border-gray-400 rounded-md"
            >
              <Pencil />
              <Label className="text-xs">write-only</Label>
            </Badge>
          )}
          {property.uniqueItems && (
            <Badge variant="outline" className="bg-cyan-50 dark:bg-cyan-200 text-cyan-800 border-cyan-200 dark:border-cyan-300 rounded-md">
              <Label className="text-xs">unique items</Label>
            </Badge>
          )}
        </div>
        {property.title && <Label className="text-gray-400 text-base">{property.title}</Label>}
        {property.description && <Label className="text-gray-400 text-sm">{property.description}</Label>}
      </div>
      {property.externalDocs && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-blue-500"
          href={property.externalDocs.url}
        >
          <ExternalLink size={16} />
          <Label className="text-sm">{property.externalDocs?.description || "External documentation"}</Label>
        </a>
      )}
    </div>
  );
};

export default SchemaPropertyMainInfo;
