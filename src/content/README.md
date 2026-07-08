# Article workflow

Add or edit articles in `client/src/content/articles`.

Each article is a Markdown file with frontmatter:

```md
---
title: "Article title"
description: "Short summary for the article listing."
date: "2026-07-07"
tags: [React, TypeScript]
readingTime: "4 min read"
---

# Article title

Write the article body in Markdown.
```

The filename becomes the URL slug. For example, `shipping-small-react-features.md` is available at `/articles/shipping-small-react-features`.
