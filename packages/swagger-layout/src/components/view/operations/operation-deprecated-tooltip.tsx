import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { OctagonAlert } from "lucide-react";

const OperationDeprecatedTooltip = () => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <OctagonAlert size={20} />
      </TooltipTrigger>
      <TooltipContent>This operation is deprecated!</TooltipContent>
    </Tooltip>
  );
};

export default OperationDeprecatedTooltip;
