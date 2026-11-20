---
description: "Use when adding a new component to the library, or when editing registry.json, tsup.config.ts, or registry/default/index.ts. Lists the registration and build steps required for a component to ship to both the shadcn registry and the npm package."
applyTo: ["registry.json", "tsup.config.ts", "registry/default/index.ts"]
---

# Adding a New Component

A component must be registered in every location below or it will be missing from the shadcn registry (`public/r/`) or the npm package (`dist/`).

1. Create `registry/default/ui/component-name.tsx`.
2. Create `src/stories/component-name.stories.tsx`.
3. Add `export * from './ui/component-name';` to `registry/default/index.ts`. For a compound component, add `export * as ComponentName from './ui/component-name';` instead (see `component-authoring.instructions.md`).
4. Add an entry to `registry.json` (list the npm `dependencies` the file imports and the `registryDependencies` it uses).
5. Run `npm run registry:build`.
6. Run `npx vitest run` to verify.

`tsup.config.ts` builds every `registry/default/ui/*.tsx` file and `package.json` exposes them through the `"./*"` export, so neither needs editing.

Keep the export name, registry key, and file name consistent across all locations.

## Registry rules

- `registryDependencies` on our own items must be full URLs (`https://dawidmakos.github.io/whitehall-ui/r/<name>.json`). The shadcn CLI resolves a bare name like `button` to shadcn's own item, not ours.
- Import other components relatively (`import { Button } from './button'`), not via `@/ui/...`. Installed ui files sit in one directory, so relative imports resolve in every project. `@/lib/utils` is fine because the CLI rewrites it.
- `public/r/` is generated and gitignored. CI builds it before deploying.
