import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { getPropertyType } from "@open-api-docs/common";
import { GitBranch, GitMerge, Layers } from "lucide-react";
import type { OpenAPIV3 } from "openapi-types";
import { Fragment } from "react/jsx-runtime";

interface ISchemaPropertySubInfo {
  property: OpenAPIV3.SchemaObject;
}

const SchemaPropertySubInfo = ({ property }: ISchemaPropertySubInfo) => {
  return (
    <Fragment>
      <div className="flex space-x-2">
        <Badge
          variant="outline"
          propertyType={getPropertyType(property).split(" ")[0] as OpenAPIV3.SchemaObject["type"]}
          className="rounded-md"
        >
          <Label className="text-xs">{getPropertyType(property)}</Label>
        </Badge>
        {property.enum && (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200 text-xs rounded-md">
            enum
          </Badge>
        )}
        {property.allOf && (
          <Badge variant="outline" className="bg-emerald-50 text-emerald-800 border-emerald-200 rounded-md">
            <Layers />
            <Label className='text-xs'>allOf</Label>
          </Badge>
        )}
        {property.anyOf && (
          <Badge variant="outline" className="bg-sky-50 text-sky-800 border-sky-200 rounded-md">
            <GitMerge />
            <Label className='text-xs'>anyOf</Label>
          </Badge>
        )}
        {property.oneOf && (
          <Badge variant="outline" className="bg-violet-50 text-violet-800 border-violet-200 rounded-md">
            <GitBranch />
            <Label className='text-xs'>oneOf</Label>
          </Badge>
        )}
      </div>
      {property.enum && (
        <div className="flex gap-2 flex-wrap">
          {property.enum.map(value => (
            <Badge key={value} variant="outline" className="bg-gray-100 text-gray-600 border-gray-300 rounded-md">
              {value}
            </Badge>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default SchemaPropertySubInfo;
