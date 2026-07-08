import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/content/profile";
import { PageHeader } from "@/features/portfolio/components/PageHeader";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

function Projects() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Projects"
        title="Public projects from GitHub."
        description="A concise view of selected repositories that represent my automation testing and full-stack development experience."
      />

      <section className="grid gap-5">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  {project.status}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-neutral-950 dark:text-neutral-50">
                  {project.title}
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-neutral-600 dark:text-neutral-300">
                  {project.description}
                </p>
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center rounded-md border border-neutral-200 px-3 py-2 text-sm font-medium hover:bg-neutral-100 hover:no-underline dark:border-neutral-800 dark:hover:bg-neutral-800"
              >
                View on GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 border-t border-neutral-200 pt-5 dark:border-neutral-800">
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                Impact
              </p>
              <p className="mt-2 leading-7 text-neutral-700 dark:text-neutral-300">
                {project.impact}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
