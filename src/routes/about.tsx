import { createFileRoute } from "@tanstack/react-router";
import {
  BriefcaseBusiness,
  Database,
  Download,
  MapPin,
  Server,
  Sparkles,
} from "lucide-react";

import {
  experience,
  profile,
  resumeHighlights,
  skillGroups,
} from "@/content/profile";
import { Button } from "@/features/shared/components/ui/Button";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="space-y-14">
      <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-7">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
              About
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-neutral-950 dark:text-neutral-50 md:text-6xl">
              Full-stack developer building practical, maintainable products.
            </h1>
          </div>

          <p className="text-lg leading-8 text-neutral-700 dark:text-neutral-300">
            {profile.summary}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a
                href={profile.resumeUrl}
                download
                className="hover:no-underline"
              >
                Download resume
                <Download className="h-4 w-4" />
              </a>
            </Button>
            <div className="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-300">
              <MapPin className="h-4 w-4 text-emerald-700 dark:text-emerald-300" />
              {profile.location}
            </div>
          </div>
        </div>

        <aside className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-neutral-950 text-2xl font-semibold text-white dark:bg-neutral-50 dark:text-neutral-950">
              {profile.initials}
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-neutral-950 dark:text-neutral-50">
                {profile.name}
              </h2>
              <p className="mt-1 text-neutral-500 dark:text-neutral-400">
                {profile.role}
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4 border-t border-neutral-200 pt-6 dark:border-neutral-800">
            {resumeHighlights.map((highlight) => (
              <div key={highlight} className="flex gap-3">
                <Sparkles className="mt-1 h-4 w-4 shrink-0 text-emerald-700 dark:text-emerald-300" />
                <p className="leading-7 text-neutral-700 dark:text-neutral-300">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {experience.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                {item.title}
              </h2>
              <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-300">
                {item.description}
              </p>
            </article>
          );
        })}
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-neutral-950 dark:text-neutral-50">
            Comfortable across the product stack.
          </h2>
          <p className="mt-4 leading-8 text-neutral-600 dark:text-neutral-300">
            I prefer tools that help teams ship readable, testable, and
            maintainable software. The goal is not only to build features, but
            to keep them understandable after release.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <h3 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-neutral-200 bg-neutral-950 p-6 text-white dark:border-neutral-800">
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Career focus
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              End-to-end delivery with a practical engineering mindset.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "Backend", icon: Server },
              { label: "Data", icon: Database },
              { label: "Delivery", icon: BriefcaseBusiness },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-md border border-white/10 bg-white/5 p-4"
                >
                  <Icon className="h-5 w-5 text-emerald-300" />
                  <p className="mt-3 font-medium">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
