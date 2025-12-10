import { cn } from '@/lib/utils';
import { Card } from "./card";
import { Label } from "./label";
import { getReasonPhrase } from "http-status-codes";
import { getOperationResponseStatusCodeVariant } from '@/constants/operation-response-status-code-variants';

interface IResponseStatus {
  statusCode: string;
}

const ResponseStatus = ({ statusCode }: IResponseStatus) => {
  const phrase = getReasonPhrase(statusCode);

  return (
    <Card className={cn("border-none rounded-sm px-2 py-1 text-white", getOperationResponseStatusCodeVariant(statusCode))}>
      <Label className="text-xs">
        {statusCode} {phrase}
      </Label>
    </Card>
  );
};

export default ResponseStatus;
