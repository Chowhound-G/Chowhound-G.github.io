import { createFileRoute } from "@tanstack/react-router";

import { contactLinks, profile } from "@/content/profile";
import { ExternalLink } from "@/features/portfolio/components/ExternalLink";
import { PageHeader } from "@/features/portfolio/components/PageHeader";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Contact"
        title="Reach out about frontend work, collaboration, or writing."
        description={profile.availability}
      />

      <section className="grid gap-5 md:grid-cols-2">
        {contactLinks.map((link) => {
          const Icon = link.icon;

          return (
            <ExternalLink
              key={link.label}
              href={link.href}
              className="group rounded-lg border border-neutral-200 bg-white p-6 hover:no-underline hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                      {link.label}
                    </h2>
                    <p className="mt-2 break-words text-neutral-600 dark:text-neutral-300">
                      {link.value}
                    </p>
                  </div>
                </div>
              </div>
            </ExternalLink>
          );
        })}
      </section>
    </div>
  );
}
