import { Label } from "@/components/ui/label";
import type { OpenAPIV3 } from "openapi-types";
import OperationResponsesItem from "./operation-responses-item";

interface IOperationResponsesList {
  responses: OpenAPIV3.ResponsesObject;
}

const OperationResponsesList = ({ responses }: IOperationResponsesList) => {
  const responsesEntries = Object.entries(responses);

  return (
    <div className="space-y-3">
      <Label>Responses ({responsesEntries.length})</Label>
      {responsesEntries.map((entry, index) => (
        <OperationResponsesItem key={index} entry={entry} />
      ))}
    </div>
  );
};

export default OperationResponsesList;
