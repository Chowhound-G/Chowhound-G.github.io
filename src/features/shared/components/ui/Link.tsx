import { Slot } from "@radix-ui/react-slot";
import { Link as TanStackLink } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ElementType } from "react";

import { cn } from "@/lib/utils/cn";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkVariants> &
  Record<string, unknown> & {
    asChild?: boolean;
  };

export default function Link({
  className,
  variant,
  asChild = false,
  ...props
}: LinkProps) {
  const Comp = (asChild ? Slot : TanStackLink) as ElementType;
  return (
    <Comp {...props} className={cn(linkVariants({ variant }), className)} />
  );
}

const linkVariants = cva("flex items-center gap-2 hover:underline", {
  variants: {
    variant: {
      default: "text-secondary-500 dark:text-primary-500",
      secondary: "",
      ghost: "hover:no-underline",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
