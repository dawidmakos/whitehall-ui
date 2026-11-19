# Whitehall-UI

GOV.UK Design System component library for **React 19** + **Tailwind CSS 4**.

Distributed two ways:

- **npm package** — install `whitehall-ui` and import components.
- **shadcn registry** — copy component source straight into your project with the shadcn CLI.

**Live Storybook & full component list:** https://dawidmakos.github.io/whitehall-ui/

---

## Requirements

Peer dependencies (your app almost certainly has these already):

```bash
npm install react@^19.3 react-dom@^19.3 tailwindcss@^4.3
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

This import also registers the package's components with Tailwind, so you don't need an `@source` line pointing into `node_modules`.

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

This writes `src/styles/govuk-tokens.css`. Import it in your CSS entry point after Tailwind:

```css
@import "tailwindcss";
@import "./styles/govuk-tokens.css"; /* path relative to src/index.css */
```

### 2. Add components

```bash
npx shadcn@latest add https://dawidmakos.github.io/whitehall-ui/r/button.json
npx shadcn@latest add https://dawidmakos.github.io/whitehall-ui/r/text-input.json
```

Swap `button` / `text-input` for any component name below. The CLI resolves each component's dependencies automatically. One of those is `lib/utils.ts`, which replaces shadcn's default `cn` with a version that understands the GOV.UK token classes and adds `mergeRefs`. Accept the overwrite prompt.

### 3. Use it

```tsx
import { Button } from '@/components/ui/button';

export function Example() {
  return <Button>Continue</Button>;
}
```

---

## Available components

`accordion` · `back-link` · `breadcrumbs` · `button` · `character-count` · `checkboxes` · `cookie-banner` · `date-input` · `details` · `error-message` · `error-summary` · `exit-this-page` · `feedback` · `fieldset` · `file-upload` · `footer` · `form-group` · `generic-header` · `header` · `hint` · `inset-text` · `label` · `language-navigation` · `link` · `notification-banner` · `pagination` · `panel` · `password-input` · `phase-banner` · `radios` · `select` · `service-navigation` · `skip-link` · `summary-list` · `table` · `tabs` · `tag` · `task-list` · `text-input` · `textarea` · `warning-text`

See the [Storybook](https://dawidmakos.github.io/whitehall-ui/) for props and live examples.

---

## License

MIT
