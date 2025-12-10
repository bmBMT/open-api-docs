import { Label } from "@/components/ui/label";
import { Separator } from '@/components/ui/separator';
import type { OpenAPIV3 } from "openapi-types";
import { Fragment } from "react/jsx-runtime";

interface IOperationDescription {
  description?: string;
  externalDocs?: OpenAPIV3.ExternalDocumentationObject;
}

const OperationDescription = ({ description, externalDocs }: IOperationDescription) => {
  if (!description && !externalDocs) return;
  return (
    <Fragment>
      <div className="flex justify-between space-x-2">
        {description && (
          <div className="space-y-2 w-full">
            <Label className="font-semibold">Description</Label>
            <Label className="text-sm text-gray-500">{description}</Label>
          </div>
        )}
        {externalDocs && (
          <div className="space-y-2 w-full">
            <div className="flex justify-between">
              <Label className="font-semibold">Find more details</Label>
              <a href={externalDocs.url} target="_blank" rel="noopener noreferrer">
                <Label className="text-[15px] text-blue-500">Docs Url</Label>
              </a>
            </div>
            {externalDocs?.description && (
              <Label className="text-[15px] text-gray-500">{externalDocs?.description}</Label>
            )}
          </div>
        )}
      </div>
      <Separator className="my-4" />
    </Fragment>
  );
};

export default OperationDescription;
