import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { articles, formatArticleDate } from "@/content/articles";
import { PageHeader } from "@/features/portfolio/components/PageHeader";
import Link from "@/features/shared/components/ui/Link";

export const Route = createFileRoute("/articles/")({
  component: Articles,
});

function Articles() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Articles"
        title="Markdown notes on frontend engineering."
        description="A clean writing archive for technical notes, project writeups, and career-focused engineering reflections."
      />

      <section className="grid gap-5">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to="/articles/$slug"
            params={{ slug: article.slug }}
            variant="ghost"
            className="group block rounded-lg border border-neutral-200 bg-white p-6 hover:no-underline hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {formatArticleDate(article.date)} · {article.readingTime}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-neutral-950 dark:text-neutral-50">
                  {article.title}
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-neutral-600 dark:text-neutral-300">
                  {article.description}
                </p>
              </div>
              <ArrowRight className="mt-1 h-5 w-5 text-neutral-400 transition group-hover:translate-x-1 group-hover:text-emerald-600" />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
