---
description: 'Use when creating or editing GOV.UK UI components in registry/default/ui. Covers arrow-function components, ref-as-prop, cn() merging, CVA variants, Base UI headless primitives, naming, exports, and px-based govuk-* tokens.'
applyTo: 'registry/default/ui/**/*.tsx'
---

# Component Authoring

## Structure

- **Arrow functions only.** Never use `function` declarations for components.
- **Props from `React.ComponentProps<'el'>`.** It already includes `ref` (React 19 ref-as-prop), so `{...props}` forwards it. Never redeclare or destructure `ref`, and never use `forwardRef`.
- **Let TS infer.** Don't redeclare props the base type has (`className`, `children`, `disabled`), don't make `children` required, use a `type` alias when there are no extra members, and derive unions from maps with `keyof typeof`.
- **Pass `children` through `{...props}`.** Destructure it only when it has a default, gets wrapped, or the element is a heading/anchor (Sonar S6850).
- **Defaults before the spread.** `<nav aria-label='Pagination' {...props}>`, not `aria-label={props['aria-label'] ?? 'Pagination'}`.
- **`'use client'`** at the top of files that use state, effects, refs or context.
- **Named export block at the end of the file.** Never `export default`.
- **No comments.** Code must be self-explanatory.

```tsx
type TagProps = Omit<React.ComponentProps<'strong'>, 'color'> &
  VariantProps<typeof tagVariants>;

const Tag = ({ className, colour = 'blue', ...props }: TagProps) => (
  <strong className={cn(tagVariants({ colour }), className)} {...props} />
);

export { Tag, tagVariants, type TagProps, type TagColour };
```

## Naming

- Props interface: `ComponentNameProps`.
- Variant type alias: `ComponentNameVariant` (or `...Colour`, etc.) derived via `NonNullable<VariantProps<...>[...]>`.
- Complex components (Header, Footer) compose multiple exported sub-components — never one monolith.

## className & variants

- **Always merge with `cn()`** imported from `@/lib/utils`. Never concatenate strings manually.
- **Use CVA** (`class-variance-authority`) whenever a component has visual variants; define `defaultVariants`.
- **No redundant CVA branches.** Omit `false: ''` branches and `defaultVariants: { x: undefined }`. Don't add `= false` defaults for boolean variants; string defaults (`variant = 'default'`) may stay because Storybook autodocs reads them.
- **Pass cva output through `cn()`** even without a `className`, so conflicting variant classes (e.g. two border colours) resolve to the last one instead of CSS source order.

## Headless primitives (Base UI)

- **Native first.** If a native element covers the behaviour (`<details>`, `<select>`, `<input>`, `<textarea>`), use it — no JS, works without hydration, and it's what GOV.UK ships.
- Interactive components that need real interaction logic (accordion, button, checkboxes, radios, tabs) wrap [`@base-ui/react`](https://base-ui.com) primitives — an **optional peer dependency**.
- Import the primitive aliased as `Base*`, then derive props from it. Omit `className` only to narrow it to a string for `cn()`; never re-add `ref` or `children`:

```tsx
import { Accordion as BaseAccordion } from '@base-ui/react/accordion';

interface AccordionProps extends Omit<
  React.ComponentProps<typeof BaseAccordion.Root>,
  'className'
> {
  className?: string;
}
```

- Import each primitive from its own subpath (e.g. `@base-ui/react/checkbox-group`), not the package root.

## Tokens & spacing (CRITICAL)

- **Never use arbitrary Tailwind values** — only `govuk-*` design tokens.
- GOV.UK spacing is **px-based**, not Tailwind's rem scale. Never swap `govuk-*` spacing for standard Tailwind spacing.

```
govuk-1: 5px   govuk-2: 10px  govuk-3: 15px  govuk-4: 20px
govuk-5: 25px  govuk-6: 30px  govuk-7: 40px  govuk-8: 50px
```

- `text-govuk-*` is treated as font-size (not colour) by `cn()`, so those tokens survive merging.

## Safety & SonarQube

- **No non-null assertions (`!`).** Use null guards or `NonNullable<...>` narrowing.
- **S2137**: Don't shadow built-in names (e.g. `Error`).
- **S6850**: Headings need visible content — render `{children}` explicitly on `h1`–`h6` (and anchors).
- **S6853**: Form labels need an explicit `htmlFor` — destructure it from props.
- **S7735**: Prefer positive conditions — flip `!== 'undefined'` to `=== 'undefined'` with swapped branches.
