export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  content: string;
};

const articleModules = import.meta.glob<string>("./articles/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    return {
      meta: {},
      content: raw.trim(),
    };
  }

  const meta = match[1].split("\n").reduce<Record<string, string | string[]>>(
    (acc, line) => {
      const [key, ...rest] = line.split(":");
      const value = rest.join(":").trim();

      if (!key || !value) {
        return acc;
      }

      if (value.startsWith("[") && value.endsWith("]")) {
        acc[key.trim()] = value
          .slice(1, -1)
          .split(",")
          .map((item) => item.trim().replace(/^["']|["']$/g, ""));
      } else {
        acc[key.trim()] = value.replace(/^["']|["']$/g, "");
      }

      return acc;
    },
    {},
  );

  return {
    meta,
    content: match[2].trim(),
  };
}

function slugFromPath(path: string) {
  return path.split("/").pop()?.replace(/\.md$/, "") ?? path;
}

function normalizeArticle(path: string, raw: string): Article {
  const { meta, content } = parseFrontmatter(raw);
  const slug = slugFromPath(path);
  const title = String(meta.title ?? slug.replace(/-/g, " "));
  const description = String(meta.description ?? "");
  const date = String(meta.date ?? "");
  const readingTime = String(meta.readingTime ?? "3 min read");
  const tags = Array.isArray(meta.tags) ? meta.tags : [];

  return {
    slug,
    title,
    description,
    date,
    tags,
    readingTime,
    content,
  };
}

export const articles = Object.entries(articleModules)
  .map(([path, raw]) => normalizeArticle(path, raw))
  .sort((a, b) => b.date.localeCompare(a.date));

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function formatArticleDate(date: string) {
  if (!date) {
    return "Undated";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}
