---
description: "Use when writing or editing Storybook stories in src/stories. Covers CSF3 format, Whitehall-UI title prefix, autodocs tag, @/ui imports, render functions, and the WithError naming rule."
applyTo: "src/stories/**/*.stories.tsx"
---

# Story Conventions

- **CSF3 format** with `satisfies Meta<typeof Component>`.
- **Title prefix** `Whitehall-UI/ComponentName`.
- **Always include** `tags: ['autodocs']`.
- **Import from** `@/ui/component-name` (the `@` alias resolves to `registry/default/`).
- **Compound components are namespaces.** Use `import * as Panel from '@/ui/panel'`, then `component: Panel.Root`, `satisfies Meta<typeof Panel.Root>`, and `<Panel.Title>` in render functions.
- **Use render functions** for composed, multi-component examples.
- **No placeholder args.** Never add `args: { children: null }` (or similar) just to satisfy types — if a story needs it, the component's props are over-typed; fix the component.
- **Custom story args** (controls that aren't component props) use `satisfies Meta<StoryArgs>` with `StoryObj<StoryArgs>` and no `component` key.
- **Rename any story named `Error` to `WithError`** (SonarQube S2137 — don't shadow built-ins).

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag, type TagColour } from '@/ui/tag';

const meta = {
  title: 'Whitehall-UI/Tag',
  component: Tag,
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Completed' },
};
```

Tests are Storybook browser tests (Chromium via Playwright) — run `npx vitest run`.
