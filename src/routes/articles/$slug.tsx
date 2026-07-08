import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { formatArticleDate, getArticle } from "@/content/articles";
import { MarkdownRenderer } from "@/features/portfolio/components/MarkdownRenderer";
import Link from "@/features/shared/components/ui/Link";

export const Route = createFileRoute("/articles/$slug")({
  component: ArticlePage,
  loader: ({ params }) => {
    const article = getArticle(params.slug);

    if (!article) {
      throw notFound();
    }

    return article;
  },
});

function ArticlePage() {
  const article = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        to="/articles"
        variant="ghost"
        className="mb-8 inline-flex text-sm font-medium text-neutral-500 hover:text-neutral-950 hover:no-underline dark:text-neutral-400 dark:hover:text-neutral-50"
      >
        <ArrowLeft className="h-4 w-4" />
        Articles
      </Link>

      <header className="border-b border-neutral-200 pb-8 dark:border-neutral-800">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {formatArticleDate(article.date)} · {article.readingTime}
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 dark:text-neutral-50 md:text-5xl">
          {article.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
          {article.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <MarkdownRenderer content={article.content} className="mt-10" />
    </article>
  );
}
