import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const destructiveVariant =
  "border-transparent bg-red-500 text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-red-500/90";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-lg border px-1 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-white [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: destructiveVariant,
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
      operationMethod: {
        get: "bg-[#4dae51] dark:bg-[#4dae51]/90",
        put: "bg-amber-500 dark:bg-amber-500/90",
        post: "bg-sky-500 dark:bg-sky-500/90",
        delete: destructiveVariant,
        options: "bg-[#795748] dark:bg-[#795748]/90",
        head: "bg-slate-500 dark:bg-slate-500/90",
        patch: "bg-purple-700 dark:bg-purple-700/90",
        trace: "bg-[#9e9e9e] dark:bg-[#9e9e9e]/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  operationMethod,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return <Comp data-slot="badge" className={cn(badgeVariants({ operationMethod, variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
