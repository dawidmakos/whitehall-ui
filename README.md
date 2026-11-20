# Whitehall-UI

Component library based on the GOV.UK Design System, for **React 19** + **Tailwind CSS 4**.

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

Import the design tokens in your CSS entry point, **after** Tailwind:

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

Swap `button` / `text-input` for any component name below. The CLI resolves each component's dependencies automatically. One of those is `lib/utils.ts`, which replaces shadcn's default `cn` with a version that understands the `govuk-*` token classes and adds `mergeRefs`. Accept the overwrite prompt.

### 3. Use it

```tsx
import { Button } from '@/components/ui/button';

export function Example() {
  return <Button>Continue</Button>;
}
```

---

## Compound components

Components made of several parts are namespaces, the same pattern as [Base UI](https://base-ui.com): a `Root` plus named parts.

```tsx
import { ServiceNavigation } from 'whitehall-ui';

export function Navigation() {
  return (
    <ServiceNavigation.Root>
      <ServiceNavigation.Container>
        <ServiceNavigation.ServiceName href='/'>My service</ServiceNavigation.ServiceName>
        <ServiceNavigation.Nav>
          <ServiceNavigation.Item active>
            <ServiceNavigation.Link href='/' aria-current='page'>
              Dashboard
            </ServiceNavigation.Link>
          </ServiceNavigation.Item>
        </ServiceNavigation.Nav>
      </ServiceNavigation.Container>
    </ServiceNavigation.Root>
  );
}
```

With a per-component subpath or a shadcn copy, import the module as the namespace:

```tsx
import * as ServiceNavigation from 'whitehall-ui/service-navigation';
import * as ServiceNavigation from '@/components/ui/service-navigation';
```

Prop types are on the namespace too: `ServiceNavigation.LinkProps`.

The namespaced components are Accordion, Breadcrumbs, Checkboxes, CookieBanner, DateInput, Details, Feedback, Fieldset, Footer, GenericHeader, Header, LanguageNavigation, NotificationBanner, Pagination, Panel, PhaseBanner, Radios, ServiceNavigation, SummaryList, Table, Tabs and TaskList. Every other component is a plain named export (`Button`, `Label`, `Tag`, …).

### Upgrading from 2.x

3.0 replaces the flat names with namespaces:

- `ServiceNavigation` → `ServiceNavigation.Root`
- `ServiceNavigationLink` → `ServiceNavigation.Link`
- `ServiceNavigationLinkProps` → `ServiceNavigation.LinkProps`

Helpers move onto their namespace too:

- `fieldsetLegendVariants` → `Fieldset.legendVariants`
- `tableCaptionVariants` → `Table.captionVariants`
- `TableCaptionSize` → `Table.CaptionSize`
- `PrevArrow` / `NextArrow` → `Pagination.PrevArrow` / `Pagination.NextArrow`

---

## Branding

Whitehall-UI ships no GOV.UK branding: no crown, GOV.UK logotype, Royal Arms or Open Government Licence logo. That branding is only for services on GOV.UK. `Header` shows the Whitehall-UI logo; compose it with your own logo, or use `GenericHeader`.

3.0.1 removed `Footer.Crown` and `Footer.LicenceLogo`, and `Header.Root` now links to `/` instead of gov.uk.

Whitehall-UI is not affiliated with or endorsed by GOV.UK or the Government Digital Service.

---

## Available components

`accordion` · `back-link` · `breadcrumbs` · `button` · `character-count` · `checkboxes` · `cookie-banner` · `date-input` · `details` · `error-message` · `error-summary` · `exit-this-page` · `feedback` · `fieldset` · `file-upload` · `footer` · `form-group` · `generic-header` · `header` · `hint` · `inset-text` · `label` · `language-navigation` · `link` · `notification-banner` · `pagination` · `panel` · `password-input` · `phase-banner` · `radios` · `select` · `service-navigation` · `skip-link` · `summary-list` · `table` · `tabs` · `tag` · `task-list` · `text-input` · `textarea` · `warning-text`

See the [Storybook](https://dawidmakos.github.io/whitehall-ui/) for props and live examples.

---

## License

MIT
