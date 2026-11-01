# Book summaries

Drop **one file per chapter** (or per book section) here. Do not paste entire books into `SKILL.md`.

## Template

Copy this into `references/book-summaries/<source-slug>.md`:

```markdown
---
source: "Rethinking Third Places — Chapter N: Chapter Name"
topics: [oldenburg, community-gardens]
priority: high
added: 2026-06-15
---

## Summary

3–5 sentences capturing the chapter's core argument.

## Actionable rules

1. Rule statement → promoted to `patterns/<file>.md` when adopted
2. ...

## Quotes / anchors

> Optional short quote (fair use) with page number.

## Glossary additions

| Term | Definition |
|------|------------|

## Cross-links

- Related pattern: [patterns/oldenburg-eight-test.md](../../patterns/oldenburg-eight-test.md)
- Anti-pattern: [anti-patterns.md](../../anti-patterns.md)
```

## Primary source

| Book / resource | Index file |
|-----------------|------------|
| *Rethinking Third Places* (Dolley & Bosman, eds., Edward Elgar, 2019) | [rtp-index.md](rtp-index.md) — PDF gitignored at repo root; ISBN 9781786433909 (hardback), 9781786433916 (e-book) |

## Promotion workflow

```
book summary → patterns/ (if durable) → anti-patterns.md (if mistake) → SKILL.md (one-line pointer only)
```

Run `node scripts/validate-skill.mjs` after adding files.
