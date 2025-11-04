import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ClipboardCopy } from "lucide-react";
import type { MouseEvent } from "react";
import { useBoolean, useCopyToClipboard, useDebounceCallback } from "usehooks-ts";
import { ONE_SECOND } from "@open-api-docs/common";

interface IOperationClipboard {
  path: string;
}

const OperationClipboard = ({ path }: IOperationClipboard) => {
  const [, copy] = useCopyToClipboard();
  const { value: copied, setTrue: setCopied, setFalse: setUnCopied } = useBoolean(false);
  const debouncedChangeCopied = useDebounceCallback(setUnCopied, ONE_SECOND / 2);

  const onClick = (e: MouseEvent) => {
    e.preventDefault();

    copy(path).then(() => {
      setCopied();
      debouncedChangeCopied();
    });
  };

  return (
    <Tooltip open={copied}>
      <TooltipTrigger>
        <ClipboardCopy size={20} onClick={onClick} />
      </TooltipTrigger>
      <TooltipContent>Operation copied!</TooltipContent>
    </Tooltip>
  );
};

export default OperationClipboard;
