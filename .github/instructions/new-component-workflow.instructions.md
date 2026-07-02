---
description: "Use when adding a new component to the library, or when editing registry.json, tsup.config.ts, or registry/default/index.ts. Lists the full registration and build steps required for a component to ship to both the shadcn registry and the npm package."
applyTo: ["registry.json", "tsup.config.ts", "registry/default/index.ts"]
---

# Adding a New Component

A component must be registered in every location below or it will be missing from the shadcn registry (`public/r/`) or the npm package (`dist/`).

1. Create `registry/default/ui/component-name.tsx`.
2. Create `src/stories/component-name.stories.tsx`.
3. Add exports to `registry/default/index.ts`.
4. Add an entry to `tsup.config.ts`.
5. Add an entry to the `exports` map in `package.json`.
6. Add an entry to `registry.json`.
7. Run `npm run registry:build`.
8. Run `npx vitest run` to verify.

Keep the export name, registry key, and file name consistent across all locations.
