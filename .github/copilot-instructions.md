# Whitehall-UI — Copilot Instructions

GOV.UK Design System component library built with React 19, TypeScript, Tailwind CSS 4, and Storybook.
Interactive components wrap `@base-ui/react` headless primitives (an optional peer dependency).
Dual distribution: shadcn-compatible registry (`public/r/`) and npm package (`dist/`).

## Architecture

```
registry/default/ui/       ← component source of truth
registry/default/theme/    ← GOV.UK design tokens (Tailwind 4 @theme)
registry/default/lib/      ← shared utilities (cn)
registry/default/index.ts  ← barrel exports
src/stories/               ← Storybook stories
scripts/build-registry.mjs ← registry JSON builder
```

The `@` alias resolves to `registry/default/`, not `src/`.

## Commands

| Task           | Command                  |
| -------------- | ------------------------ |
| Dev server     | `npm run dev`            |
| Storybook      | `npm run storybook`      |
| Tests          | `npx vitest run`         |
| Library build  | `npm run build:lib`      |
| Registry build | `npm run registry:build` |

Tests are Storybook browser tests (Chromium via Playwright), not traditional unit tests.

## Component Conventions

- **Arrow functions only** — never use function declarations for components.
- **No `forwardRef`** — accept `ref` as a regular prop in the interface.
- **`cn()` for all className merging** — import from `@/lib/utils`.
- **CVA for variants** — use `class-variance-authority` when a component has visual variants.
- **Interface naming** — `ComponentNameProps` for props, `ComponentNameVariant` for variant type aliases.
- **Composable sub-components** — complex components (Header, Footer) use multiple exported sub-components, not a single monolithic component.
- **Named export block at end of file** — separate `export { }` statement with types, never `export default`.
- **No comments in component code** — code should be self-explanatory.
- **No arbitrary Tailwind values** — always use design tokens (`govuk-*` classes).

## Tokens & Spacing (CRITICAL)

GOV.UK spacing is **px-based**, not Tailwind's rem scale. Never replace `govuk-*` spacing with standard Tailwind spacing.

```
govuk-1: 5px, govuk-2: 10px, govuk-3: 15px, govuk-4: 20px,
govuk-5: 25px, govuk-6: 30px, govuk-7: 40px, govuk-8: 50px
```

Custom `@utility` classes exist for focus rings (`govuk-link-focus`), underline thickness (`govuk-link-underline`, `govuk-link-underline-hover`), and checkbox/radio marks.

The `cn()` utility extends `tailwind-merge` to treat `text-govuk-*` as font-size (not colour), so these tokens survive merging.

## Story Conventions

- CSF3 format with `satisfies Meta<typeof Component>`.
- Title prefix: `Whitehall-UI/ComponentName`.
- Always include `tags: ['autodocs']`.
- Import from `@/ui/component-name`.
- Use render functions for composed multi-component examples.
- Rename any story named `Error` to `WithError` (SonarQube S2137).

## Adding a New Component

1. Create `registry/default/ui/component-name.tsx`
2. Create `src/stories/component-name.stories.tsx`
3. Add exports to `registry/default/index.ts`
4. Add entry to `tsup.config.ts`
5. Add entry to `package.json` exports map
6. Add entry to `registry.json`
7. Run `npm run registry:build`
8. Run `npx vitest run` to verify

## SonarQube Rules

- **S2137**: Don't shadow built-in names (e.g. `Error`).
- **S6853**: Form labels must have explicit `htmlFor` — destructure it from props.
- **S7735**: Prefer positive conditions — flip `!== 'undefined'` to `=== 'undefined'` with swapped branches.
- Avoid non-null assertions (`!`) — use null guards instead.
