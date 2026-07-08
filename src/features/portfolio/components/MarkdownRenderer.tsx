import { Fragment } from "react";
import type { ElementType } from "react";

import { cn } from "@/lib/utils/cn";

type MarkdownRendererProps = {
  content: string;
  className?: string;
};

type Block =
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "code"; language?: string; code: string };

function isBlockStart(line: string) {
  return (
    /^#{1,4}\s+/.test(line) ||
    /^>\s?/.test(line) ||
    /^\s*[-*]\s+/.test(line) ||
    /^\s*\d+\.\s+/.test(line) ||
    /^```/.test(line)
  );
}

function parseBlocks(content: string) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    const codeStart = line.match(/^```(\w+)?/);
    if (codeStart) {
      const code: string[] = [];
      index += 1;

      while (index < lines.length && !/^```/.test(lines[index])) {
        code.push(lines[index]);
        index += 1;
      }

      blocks.push({
        type: "code",
        language: codeStart[1],
        code: code.join("\n"),
      });
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      blocks.push({
        type: "heading",
        level: heading[1].length,
        text: heading[2],
      });
      index += 1;
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quote: string[] = [];

      while (index < lines.length && /^>\s?/.test(lines[index])) {
        quote.push(lines[index].replace(/^>\s?/, ""));
        index += 1;
      }

      blocks.push({ type: "quote", text: quote.join(" ") });
      continue;
    }

    const unordered = /^\s*[-*]\s+/.test(line);
    const ordered = /^\s*\d+\.\s+/.test(line);
    if (unordered || ordered) {
      const items: string[] = [];
      const pattern = ordered ? /^\s*\d+\.\s+/ : /^\s*[-*]\s+/;

      while (index < lines.length && pattern.test(lines[index])) {
        items.push(lines[index].replace(pattern, ""));
        index += 1;
      }

      blocks.push({ type: "list", ordered, items });
      continue;
    }

    const paragraph: string[] = [];
    while (
      index < lines.length &&
      lines[index].trim() &&
      !isBlockStart(lines[index])
    ) {
      paragraph.push(lines[index]);
      index += 1;
    }

    blocks.push({ type: "paragraph", text: paragraph.join(" ") });
  }

  return blocks;
}

function renderInline(text: string) {
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(pattern).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={index}
          className="rounded bg-neutral-100 px-1.5 py-0.5 text-[0.9em] text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const href = link[2];
      return (
        <a
          key={index}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="font-medium text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-900 dark:text-emerald-300 dark:decoration-emerald-700 dark:hover:text-emerald-200"
        >
          {link[1]}
        </a>
      );
    }

    return <Fragment key={index}>{part}</Fragment>;
  });
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  const blocks = parseBlocks(content);

  return (
    <div
      className={cn(
        "space-y-6 text-base leading-8 text-neutral-700 dark:text-neutral-300",
        className,
      )}
    >
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const levelClasses = {
            1: "mt-2 text-3xl font-semibold tracking-normal text-neutral-950 dark:text-neutral-50",
            2: "pt-6 text-2xl font-semibold tracking-normal text-neutral-950 dark:text-neutral-50",
            3: "pt-4 text-xl font-semibold tracking-normal text-neutral-950 dark:text-neutral-50",
            4: "pt-2 text-lg font-semibold tracking-normal text-neutral-950 dark:text-neutral-50",
          };
          const Heading = `h${block.level}` as ElementType;

          return (
            <Heading
              key={index}
              className={levelClasses[block.level as keyof typeof levelClasses]}
            >
              {renderInline(block.text)}
            </Heading>
          );
        }

        if (block.type === "paragraph") {
          return <p key={index}>{renderInline(block.text)}</p>;
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={index}
              className="border-l-2 border-emerald-500 pl-5 text-neutral-600 dark:text-neutral-300"
            >
              {renderInline(block.text)}
            </blockquote>
          );
        }

        if (block.type === "list") {
          const List = block.ordered ? "ol" : "ul";
          return (
            <List
              key={index}
              className={cn(
                "space-y-2 pl-6",
                block.ordered ? "list-decimal" : "list-disc",
              )}
            >
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{renderInline(item)}</li>
              ))}
            </List>
          );
        }

        return (
          <pre
            key={index}
            className="overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-950 p-4 text-sm leading-7 text-neutral-100 dark:border-neutral-800"
          >
            {block.language ? (
              <div className="mb-3 text-xs uppercase tracking-[0.16em] text-neutral-500">
                {block.language}
              </div>
            ) : undefined}
            <code>{block.code}</code>
          </pre>
        );
      })}
    </div>
  );
}
