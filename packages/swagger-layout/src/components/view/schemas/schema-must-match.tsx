import { getMustMatchVariantContent } from '@/lib/schema-must-match-variants';
import { cn } from "@/lib/utils";
import type { SchemaOfTypes } from "@/types/schema-of-types";

interface IMustMatch {
  variant: SchemaOfTypes;
}

const SchemaMustMatch = ({ variant }: IMustMatch) => {
  const content = getMustMatchVariantContent(variant);

  return (
    <div className={cn("border-l-2 pl-3 py-2", content.fill)}>
      <div className={cn("flex items-center gap-2 text-xs mb-1", content.content)}>
        <content.icon className="w-3.5 h-3.5" />
        <span>{content.text}:</span>
      </div>
    </div>
  );
};

export default SchemaMustMatch;
