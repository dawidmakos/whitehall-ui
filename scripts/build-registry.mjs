/**
 * Registry build script
 *
 * Reads registry.json and inlines each file's source code into individual
 * JSON payloads under public/r/<name>.json — ready to be served as static
 * files and consumed via `npx shadcn add <url>`.
 *
 * Usage: node scripts/build-registry.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const registry = JSON.parse(
  readFileSync(resolve(root, 'registry.json'), 'utf-8'),
);

const outDir = resolve(root, 'public', 'r');
mkdirSync(outDir, { recursive: true });

for (const item of registry.items) {
  const payload = {
    $schema: 'https://ui.shadcn.com/schema/registry-item.json',
    name: item.name,
    type: item.type,
    title: item.title,
    description: item.description,
    dependencies: item.dependencies ?? [],
    devDependencies: item.devDependencies ?? [],
    registryDependencies: item.registryDependencies ?? [],
    files: item.files.map((file) => ({
      path: file.path,
      type: file.type,
      content: readFileSync(resolve(root, file.path), 'utf-8'),
    })),
  };

  const outPath = resolve(outDir, `${item.name}.json`);
  writeFileSync(outPath, JSON.stringify(payload, null, 2) + '\n');
  console.log(`  ✓ ${item.name} → public/r/${item.name}.json`);
}

console.log(`\nBuilt ${registry.items.length} registry items.`);
