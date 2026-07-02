---
description: "Use when writing or editing Storybook stories in src/stories. Covers CSF3 format, Whitehall-UI title prefix, autodocs tag, @/ui imports, render functions, and the WithError naming rule."
applyTo: "src/stories/**/*.stories.tsx"
---

# Story Conventions

- **CSF3 format** with `satisfies Meta<typeof Component>`.
- **Title prefix** `Whitehall-UI/ComponentName`.
- **Always include** `tags: ['autodocs']`.
- **Import from** `@/ui/component-name` (the `@` alias resolves to `registry/default/`).
- **Use render functions** for composed, multi-component examples.
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
