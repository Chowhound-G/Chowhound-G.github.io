import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, FileText, Mail } from "lucide-react";

import { articles, formatArticleDate } from "@/content/articles";
import { profile, projects, stats } from "@/content/profile";
import { Button } from "@/features/shared/components/ui/Button";
import Link from "@/features/shared/components/ui/Link";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const recentArticles = articles.slice(0, 2);
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="space-y-20">
      <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
            {profile.location}
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] text-neutral-950 dark:text-neutral-50 md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 text-xl leading-9 text-neutral-700 dark:text-neutral-300">
            {profile.headline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link
                to="/projects"
                variant="ghost"
                className="hover:no-underline"
              >
                View projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                to="/contact"
                variant="ghost"
                className="hover:no-underline"
              >
                Contact
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
          <img
            src={`${import.meta.env.BASE_URL}developer-workspace-hero.png`}
            alt="Minimal developer workspace with a laptop and notebook"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/65 to-transparent p-5 text-white">
            <p className="max-w-sm text-sm leading-6">
              Project-driven portfolio, writing archive, and lightweight
              professional profile.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 border-y border-neutral-200 py-6 dark:border-neutral-800 md:grid-cols-3">
        {stats.map((item) => (
          <div key={item.label}>
            <div className="text-2xl font-semibold text-neutral-950 dark:text-neutral-50">
              {item.value}
            </div>
            <div className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              {item.label}
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
            Selected work
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-neutral-950 dark:text-neutral-50">
            Public projects that show testing, full-stack delivery, and product
            implementation.
          </h2>
        </div>
        <div className="grid gap-4">
          {featuredProjects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-lg border border-neutral-200 bg-white p-5 hover:no-underline hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {project.status}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-neutral-950 dark:text-neutral-50">
                    {project.title}
                  </h3>
                </div>
                <ArrowRight className="mt-1 h-5 w-5 text-neutral-400 transition group-hover:translate-x-1 group-hover:text-emerald-600" />
              </div>
              <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-300">
                {project.description}
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
            </a>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
            Recent writing
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-neutral-950 dark:text-neutral-50">
            Notes on React, product engineering, and maintainable UI.
          </h2>
        </div>
        <div className="grid gap-4">
          {recentArticles.map((article) => (
            <Link
              key={article.slug}
              to="/articles/$slug"
              params={{ slug: article.slug }}
              variant="ghost"
              className="group block rounded-lg border border-neutral-200 bg-white p-5 hover:no-underline hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                <FileText className="h-4 w-4" />
                {formatArticleDate(article.date)} · {article.readingTime}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-neutral-950 dark:text-neutral-50">
                {article.title}
              </h3>
              <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-300">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
