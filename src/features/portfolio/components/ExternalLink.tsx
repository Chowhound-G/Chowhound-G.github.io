import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils/cn";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={cn("flex items-start justify-between gap-4", className)}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}
