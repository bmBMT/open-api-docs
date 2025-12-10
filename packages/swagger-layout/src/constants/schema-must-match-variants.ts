import type { SchemaOfTypes } from "@/types/schema-of-types";
import { Ban, GitBranch, GitMerge, Layers, type LucideIcon } from "lucide-react";

interface IVariantContent {
  fill: string;
  content: string;
  icon?: LucideIcon;
  text: string;
  border: string;
}

export const getMustMatchVariantContent = (variant: SchemaOfTypes) => {
  const content: Record<SchemaOfTypes, IVariantContent> = {
    allOf: {
      fill: "bg-emerald-50 border-emerald-300 dark:bg-emerald-200/90 dark:border-emerald-400/90",
      content: "text-emerald-800",
      icon: Layers,
      text: "Must match ALL of the following schemas",
      border: "border-emerald-200",
    },
    anyOf: {
      fill: "bg-sky-50 border-sky-300 dark:bg-sky-200/90 dark:border-sky-400/90",
      content: "text-sky-800",
      icon: GitMerge,
      text: "Must match AT LEAST ONE of the following schemas",
      border: "border-sky-200",
    },
    oneOf: {
      fill: "bg-violet-50 border-violet-300 dark:bg-violet-200/90 dark:border-violet-400/90",
      content: "text-violet-800",
      icon: GitBranch,
      text: "Must match EXACTLY ONE of the following schemas",
      border: "border-violet-200",
    },
    not: {
      fill: "bg-red-50 border-red-300 dark:bg-red-200/90 dark:border-red-400/90",
      content: "text-red-800",
      icon: Ban,
      text: "Must NOT match the following schema",
      border: "border-red-200",
    },
    additionalProperties: {
      fill: "bg-teal-50 border-teal-200 dark:bg-teal-200/90 dark:border-teal-400/90",
      content: "text-teal-800",
      text: "Additional properties schema",
      border: "border-teal-200",
    },
  };

  return content[variant];
};
