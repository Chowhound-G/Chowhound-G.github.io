import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navigationItems, profile } from "@/content/profile";
import { cn } from "@/lib/utils/cn";

import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/Button";
import Link from "./ui/Link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkClassName =
    "rounded-md px-3 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-neutral-50";
  const activeNavLinkClassName =
    "bg-neutral-100 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-50";

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200 bg-stone-50/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          to="/"
          variant="ghost"
          className="flex items-center gap-3 hover:no-underline"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-neutral-950 text-sm font-semibold text-white dark:bg-neutral-50 dark:text-neutral-950">
            {profile.initials}
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-neutral-950 dark:text-neutral-50">
              {profile.name}
            </span>
            <span className="block text-xs text-neutral-500 dark:text-neutral-400">
              {profile.role}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              variant="ghost"
              className={navLinkClassName}
              activeProps={{ className: activeNavLinkClassName }}
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            type="button"
            variant="outline"
            className="h-10 w-10 p-0"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      <div
        className={cn(
          "border-t border-neutral-200 px-5 py-3 dark:border-neutral-800 md:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1">
          {navigationItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              variant="ghost"
              className={navLinkClassName}
              activeProps={{ className: activeNavLinkClassName }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
