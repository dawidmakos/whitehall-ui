---
description: "Use when adding a new component to the library, or when editing registry.json, tsup.config.ts, or registry/default/index.ts. Lists the registration and build steps required for a component to ship to both the shadcn registry and the npm package."
applyTo: ["registry.json", "tsup.config.ts", "registry/default/index.ts"]
---

# Adding a New Component

A component must be registered in every location below or it will be missing from the shadcn registry (`public/r/`) or the npm package (`dist/`).

1. Create `registry/default/ui/component-name.tsx`.
2. Create `src/stories/component-name.stories.tsx`.
3. Add `export * from './ui/component-name';` to `registry/default/index.ts`.
4. Add an entry to `registry.json` (list the npm `dependencies` the file imports and the `registryDependencies` it uses).
5. Run `npm run registry:build`.
6. Run `npx vitest run` to verify.

`tsup.config.ts` builds every `registry/default/ui/*.tsx` file and `package.json` exposes them through the `"./*"` export, so neither needs editing.

Keep the export name, registry key, and file name consistent across all locations.
