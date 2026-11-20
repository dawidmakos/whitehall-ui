# Whitehall-UI — Copilot Instructions

Component library based on the GOV.UK Design System, built with React 19, TypeScript, Tailwind CSS 4, and Storybook.
Interactive components wrap `@base-ui/react` headless primitives (an optional peer dependency).
Dual distribution: shadcn-compatible registry (`public/r/`) and npm package (`dist/`).

## Architecture

```
registry/default/ui/       ← component source of truth
registry/default/theme/    ← design tokens (Tailwind 4 @theme)
registry/default/lib/      ← shared utilities (cn, mergeRefs)
registry/default/index.ts  ← barrel exports
src/stories/               ← Storybook stories
scripts/build-registry.mjs ← registry JSON builder
```

The `@` alias resolves to `registry/default/`, not `src/`.

## Commands

| Task           | Command                  |
| -------------- | ------------------------ |
| Storybook      | `npm run storybook`      |
| Tests          | `npx vitest run`         |
| Type-check     | `npm run typecheck`      |
| Lint           | `npm run lint`           |
| Library build  | `npm run build:lib`      |
| Registry build | `npm run registry:build` |

Tests are mostly Storybook browser tests (Chromium via Playwright), plus a small `unit` project for `src/**/*.test.ts` (e.g. `src/cn.test.ts`).

Every story is checked with axe at desktop width and at 390px (`storybook-mobile`); `a11y.test: 'error'` in `.storybook/preview.ts` makes any violation fail the run. Fix the component rather than disabling the check. Stories must also reflow at 320px without horizontal page scrolling (WCAG 1.4.10).

## Component Conventions

- **Arrow functions only** — never use function declarations for components.
- **No `forwardRef`, no `ref` plumbing** — props come from `React.ComponentProps<'el'>` (or `React.ComponentProps<typeof Base.X>`), which already includes `ref`. `{...props}` forwards it (React 19). Never redeclare or destructure `ref`.
- **Let TS infer** — don't redeclare props the base type already has (`className`, `children`, `disabled`), don't make `children` required, use a `type` alias when there are no extra props, and derive unions from maps with `keyof typeof`.
- **Pass `children` through `{...props}`** — destructure it only when it has a default, is wrapped, or the element is a heading/anchor (Sonar S6850 can't see children through a spread).
- **Defaults before the spread** — `<nav aria-label='Pagination' {...props}>`, not `aria-label={props['aria-label'] ?? 'Pagination'}`.
- **`'use client'`** at the top of files that use state, effects, refs or context.
- **Native first** — use the native element (`<details>`, `<select>`, `<input>`) when the platform covers the behaviour; reach for Base UI only for real interaction logic.
- **`cn()` for all className merging** — import from `@/lib/utils`.
- **CVA for variants** — use `class-variance-authority` when a component has visual variants.
- **Interface naming** — `ComponentNameProps` for props, `ComponentNameVariant` for variant type aliases.
- **Compound components are namespaces** — complex components (Header, Footer) are a set of parts, not one monolith, following Base UI's pattern. Keep prefixed local names (`PanelTitle`) and alias them in the export block (`Panel as Root`, `PanelTitle as Title`, `type PanelTitleProps as TitleProps`). The barrel turns the module into the namespace, so consumers write `Panel.Root` and `Panel.Title`. Never build it with an object literal or `Object.assign`: dotting into a `'use client'` module's export throws in React Server Components.
- **No GOV.UK branding** — never add the crown, GOV.UK logotype, Royal Arms, Open Government Licence logo, "Crown copyright" or links to gov.uk to components, stories or docs, and use fictional names instead of real government services or departments. GOV.UK branding is only for services on GOV.UK; `Header` uses the Whitehall-UI logo.
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

The `cn()` utility extends `tailwind-merge` so govuk tokens merge correctly: `*-govuk-*` spacing is spacing (a `className="mb-0"` override wins), `text-govuk-*` font sizes and `border-*-govuk-*` widths aren't mistaken for colours. Add new font-size or border-width tokens to its lists.

## Story Conventions

- CSF3 format with `satisfies Meta<typeof Component>` (`typeof Panel.Root` for a compound component).
- Title prefix: `Whitehall-UI/ComponentName`.
- Always include `tags: ['autodocs']`.
- Import from `@/ui/component-name`. Import a compound component as a namespace: `import * as Panel from '@/ui/panel'`.
- Use render functions for composed multi-component examples.
- Rename any story named `Error` to `WithError` (SonarQube S2137).

## Adding a New Component

1. Create `registry/default/ui/component-name.tsx`
2. Create `src/stories/component-name.stories.tsx`
3. Add `export * from './ui/component-name';` to `registry/default/index.ts` (`export * as ComponentName from './ui/component-name';` for a compound component)
4. Add entry to `registry.json`
5. Run `npm run registry:build`
6. Run `npx vitest run` to verify

`tsup.config.ts` (glob entry) and the `package.json` `"./*"` export pick new files up automatically.

Follow the registry rules in `.github/instructions/new-component-workflow.instructions.md`: full-URL `registryDependencies` for our own items, and relative imports between ui files (`./button`, not `@/ui/button`).

## SonarQube Rules

- **S2137**: Don't shadow built-in names (e.g. `Error`).
- **S6850**: Headings need visible content — render `{children}` explicitly on `h1`–`h6` (and anchors).
- **S6853**: Form labels must have explicit `htmlFor` — destructure it from props.
- **S7735**: Prefer positive conditions — flip `!== 'undefined'` to `=== 'undefined'` with swapped branches.
- Avoid non-null assertions (`!`) — use null guards instead.
