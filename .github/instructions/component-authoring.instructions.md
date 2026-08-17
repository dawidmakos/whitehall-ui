---
description: 'Use when creating or editing GOV.UK UI components in registry/default/ui. Covers arrow-function components, ref-as-prop, cn() merging, CVA variants, Base UI headless primitives, naming, exports, and px-based govuk-* tokens.'
applyTo: 'registry/default/ui/**/*.tsx'
---

# Component Authoring

## Structure

- **Arrow functions only.** Never use `function` declarations for components.
- **No `forwardRef`.** Accept `ref` as a regular prop declared in the props interface.
- **Named export block at the end of the file.** Never `export default`.
- **No comments.** Code must be self-explanatory.

```tsx
interface TagProps
  extends
    Omit<React.HTMLAttributes<HTMLElement>, 'className' | 'color'>,
    VariantProps<typeof tagVariants> {
  ref?: React.Ref<HTMLElement>;
  className?: string;
}

const Tag = ({ className, colour = 'blue', ref, ...props }: TagProps) => (
  <strong
    ref={ref}
    className={cn(tagVariants({ colour }), className)}
    {...props}
  />
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

## Headless primitives (Base UI)

- Interactive components (accordion, button, checkboxes, details, radios, select, tabs, text-input) wrap [`@base-ui/react`](https://base-ui.com) primitives — an **optional peer dependency**.
- Import the primitive aliased as `Base*`, then derive props from it:

```tsx
import { Accordion as BaseAccordion } from '@base-ui/react/accordion';

interface AccordionProps extends Omit<
  React.ComponentProps<typeof BaseAccordion.Root>,
  'className'
> {
  ref?: React.Ref<HTMLDivElement>;
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
- **S6853**: Form labels need an explicit `htmlFor` — destructure it from props.
- **S7735**: Prefer positive conditions — flip `!== 'undefined'` to `=== 'undefined'` with swapped branches.
