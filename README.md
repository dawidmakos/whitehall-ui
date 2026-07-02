# Whitehall-UI

GOV.UK Design System component library for **React 19** + **Tailwind CSS 4**.

Distributed two ways:

- **npm package** — install `whitehall-ui` and import components.
- **shadcn registry** — copy component source straight into your project with the shadcn CLI.

**Live Storybook & full component list:** https://dawidmakos.github.io/whitehall-ui/

---

## Requirements

These are peer dependencies — install them in your app:

```bash
npm install react@^19 react-dom@^19 tailwindcss@^4 @base-ui/react
```

---

## Option A — npm package

### 1. Install

```bash
npm install whitehall-ui
```

### 2. Load the theme tokens

Import the GOV.UK design tokens in your CSS entry point, **after** Tailwind:

```css
@import 'tailwindcss';
@import 'whitehall-ui/tokens.css';
```

### 3. Use a component

Import from the package root:

```tsx
import { Button, TextInput, Label } from 'whitehall-ui';

export function Example() {
  return (
    <form>
      <Label htmlFor='name'>Full name</Label>
      <TextInput id='name' name='name' />
      <Button>Continue</Button>
    </form>
  );
}
```

Per-component subpath imports also work (better tree-shaking):

```tsx
import { Button } from 'whitehall-ui/button';
```

---

## Option B — shadcn registry

Copy the component source into your own codebase (fully editable, no runtime dependency on the package).

### 1. Add the theme tokens (once)

```bash
npx shadcn@latest add https://dawidmakos.github.io/whitehall-ui/r/govuk-tokens.json
```

### 2. Add components

```bash
npx shadcn@latest add https://dawidmakos.github.io/whitehall-ui/r/button.json
npx shadcn@latest add https://dawidmakos.github.io/whitehall-ui/r/text-input.json
```

Swap `button` / `text-input` for any component name below. The CLI resolves each component's dependencies (e.g. the `cn` util) automatically.

### 3. Use it

```tsx
import { Button } from '@/components/ui/button';

export function Example() {
  return <Button>Continue</Button>;
}
```

---

## Available components

`accordion` · `back-link` · `breadcrumbs` · `button` · `character-count` · `checkboxes` · `cookie-banner` · `date-input` · `details` · `error-message` · `error-summary` · `exit-this-page` · `fieldset` · `file-upload` · `footer` · `generic-header` · `header` · `hint` · `inset-text` · `label` · `link` · `notification-banner` · `pagination` · `panel` · `password-input` · `phase-banner` · `radios` · `select` · `service-navigation` · `skip-link` · `summary-list` · `table` · `tabs` · `tag` · `task-list` · `text-input` · `textarea` · `warning-text`

See the [Storybook](https://dawidmakos.github.io/whitehall-ui/) for props and live examples.

---

## License

MIT
