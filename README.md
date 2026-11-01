# third-place-specialist

[![Agent Skills](https://img.shields.io/badge/Agent%20Skills-compatible-5c4ee5)](https://agentskills.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Ray Oldenburg third-place frameworks and urban community planning patterns for AI agents — Oldenburg audits, social capital, age-friendly design, community gardens, transit placemaking, and feminist critiques.

## Install

### Cursor / Claude Code (recommended)

```bash
npx skills add brewhubphl/third-place-specialist
```

This installs into the current project (the default scope). Add `-g` to install globally for your user, or `-a <agent>` (e.g. `-a claude-code`) to target a specific agent. Run `npx skills add --help` for the full option list.

### Manual

```bash
git clone https://github.com/brewhubphl/third-place-specialist.git
cp -R third-place-specialist ~/.cursor/skills/third-place-specialist
# or symlink into your repo: .agents/skills/third-place-specialist
```

## Usage

The agent loads the skill automatically when a task matches its description. You can also invoke it explicitly:

```
Use the third-place-specialist skill to audit this master plan's "community hub" claims.
```

```
@third-place-specialist Run the Oldenburg 8-test on this community garden brief.
```

The agent should read `SKILL.md` first, then pull only the relevant `patterns/*.md` file — not the entire tree.

## Repository layout

```
├── SKILL.md                 # Entry point + YAML frontmatter
├── AGENTS.md                # Navigation for agents
├── PRINCIPLES.md            # Five third-place thinking principles
├── anti-patterns.md         # Consolidated planning mistakes
├── patterns/                # Deep dives (load on demand)
├── references/              # Glossary, cheatsheet, book summaries
├── examples/                # Abstract neighbourhood planning scenarios
├── assets/diagrams/         # Optional visual assets
└── scripts/validate-skill.mjs # CI validation
```

## Source book

This repo includes [11 chapter summaries](references/book-summaries/rtp-index.md) from [*Rethinking Third Places: Informal Public Spaces and Community Building*](https://www.e-elgar.com/shop/gbp/rethinking-third-places-9781786433909.html) edited by Joanne Dolley and Caryl Bosman (Edward Elgar, 2019, ~240 pp., ISBN 9781786433909 hardback / 9781786433916 e-book). Ray Oldenburg's *The Great Good Place* (1989) remains the foundational source.

To extend:

1. Add a chapter summary under `references/book-summaries/<slug>.md` using the template in that folder.
2. Promote durable rules into `patterns/` when they become standards.
3. Add recurring mistakes to `anti-patterns.md`.
4. Open a PR — CI runs `node scripts/validate-skill.mjs`.

Keep `SKILL.md` lean; book content stays modular.

## Local PDF

`Rethinking_Third_Places.pdf` at repo root is gitignored — keep your own copy for deep reading. Agents use the modular chapter summaries.

## Development

```bash
node scripts/validate-skill.mjs
```

## License

MIT — see [LICENSE](LICENSE).
