#!/usr/bin/env node
/**
 * Validates third-place-specialist SKILL.md frontmatter and required paths.
 * Usage: node scripts/validate-skill.mjs
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const REQUIRED_FILES = [
  'SKILL.md',
  'README.md',
  'AGENTS.md',
  'PRINCIPLES.md',
  'anti-patterns.md',
  'patterns/oldenburg-eight-test.md',
  'patterns/planning-community-traps.md',
  'patterns/feminist-third-place-audit.md',
  'patterns/ageing-social-health.md',
  'patterns/evidence-based-design.md',
  'patterns/eyes-on-street-safety.md',
  'patterns/community-garden-design.md',
  'patterns/transit-third-place.md',
  'patterns/digital-layers.md',
  'patterns/street-life-activation.md',
  'examples/third-place-planning.md',
  'references/glossary.md',
  'references/cheatsheet.md',
  'references/book-summaries/README.md',
  'references/book-summaries/rtp-index.md',
  'references/book-summaries/rtp-ch01-rethinking-third-places.md',
  'references/book-summaries/rtp-ch02-feminist-perspectives.md',
  'references/book-summaries/rtp-ch03-healthy-ageing.md',
  'references/book-summaries/rtp-ch04-child-friendly.md',
  'references/book-summaries/rtp-ch05-evidence-based-planning.md',
  'references/book-summaries/rtp-ch06-eyes-on-the-street.md',
  'references/book-summaries/rtp-ch07-music-heritage.md',
  'references/book-summaries/rtp-ch08-community-gardens.md',
  'references/book-summaries/rtp-ch09-digital-layers.md',
  'references/book-summaries/rtp-ch10-transit-third-places.md',
  'references/book-summaries/rtp-ch11-street-life.md',
];

const REQUIRED_FRONTMATTER_KEYS = ['name', 'description'];

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const block = match[1];
  const result = {};
  for (const line of block.split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (value.startsWith('>')) value = value.slice(1).trim();
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    result[key] = value;
  }
  return result;
}

let failed = false;

for (const rel of REQUIRED_FILES) {
  const path = join(root, rel);
  if (!existsSync(path)) {
    console.error(`MISSING: ${rel}`);
    failed = true;
  }
}

const skillPath = join(root, 'SKILL.md');
const skillContent = readFileSync(skillPath, 'utf8');
const fm = parseFrontmatter(skillContent);

if (!fm) {
  console.error('SKILL.md: missing YAML frontmatter');
  failed = true;
} else {
  for (const key of REQUIRED_FRONTMATTER_KEYS) {
    if (!fm[key]) {
      console.error(`SKILL.md: missing frontmatter key "${key}"`);
      failed = true;
    }
  }
  if (fm.name !== 'third-place-specialist') {
    console.error(`SKILL.md: name must be "third-place-specialist", got "${fm.name}"`);
    failed = true;
  }
  if (fm.description && fm.description.length > 1024) {
    console.error('SKILL.md: description exceeds 1024 characters (Agent Skills limit)');
    failed = true;
  }
}

const skillLines = skillContent.split('\n').length;
if (skillLines > 500) {
  console.warn(`WARN: SKILL.md is ${skillLines} lines — consider moving detail to patterns/`);
}

if (failed) {
  process.exit(1);
}

console.log('validate-skill: OK');
