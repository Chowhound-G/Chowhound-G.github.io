---
title: "A Markdown-Driven Portfolio"
description: "How this site keeps writing separate from the React page structure."
date: "2026-07-07"
tags: [React, Markdown, Portfolio]
readingTime: "3 min read"
---

# A Markdown-Driven Portfolio

The writing layer in this website is deliberately small. Articles live as Markdown files, while the React app handles routing, layout, metadata, and rendering.

## Why this works

- Markdown keeps drafting fast.
- Frontmatter keeps article metadata predictable.
- Static imports keep deployment simple.
- The article page can improve over time without rewriting old posts.

## What an article needs

Each file starts with frontmatter:

```md
---
title: "A Markdown-Driven Portfolio"
description: "Short article summary."
date: "2026-07-07"
tags: [React, Markdown]
readingTime: "3 min read"
---
```

After that, the body can use headings, lists, links, quotes, and code fences.

> The goal is not a heavy CMS. The goal is a writing workflow that remains easy to maintain.

## Next improvements

The next practical step would be adding RSS, Open Graph metadata, and optional draft filtering.
