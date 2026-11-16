/**
 * Registry build script
 *
 * Reads registry.json and inlines each file's source code into individual
 * JSON payloads under public/r/<name>.json — ready to be served as static
 * files and consumed via `npx shadcn add <url>`.
 *
 * Usage: node scripts/build-registry.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');

const registry = JSON.parse(
  readFileSync(resolve(root, 'registry.json'), 'utf-8'),
);

const outDir = resolve(root, 'public', 'r');
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

for (const item of registry.items) {
  // Pass every field through (target, css, cssVars, docs…), only inline file content.
  const payload = {
    $schema: 'https://ui.shadcn.com/schema/registry-item.json',
    ...item,
    files: item.files.map((file) => ({
      ...file,
      content: readFileSync(resolve(root, file.path), 'utf-8'),
    })),
  };

  const outPath = resolve(outDir, `${item.name}.json`);
  writeFileSync(outPath, JSON.stringify(payload, null, 2) + '\n');
  console.log(`  ✓ ${item.name} → public/r/${item.name}.json`);
}

console.log(`\nBuilt ${registry.items.length} registry items.`);
