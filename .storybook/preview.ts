/// <reference types="vite/client" />

import type { Preview } from '@storybook/react-vite';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import '../src/index.css';

// "Show code" names compound parts by their public path (Fieldset.Legend) instead of
// their unexported local name (FieldsetLegend). import.meta.glob keeps the registry
// out of this file's tsconfig.
const library = Object.values(
  import.meta.glob<Record<string, unknown>>('../registry/default/index.ts', {
    eager: true,
  }),
)[0];
for (const [namespace, parts] of Object.entries(library)) {
  if (typeof parts !== 'object' || parts === null) continue;
  for (const [part, component] of Object.entries(parts)) {
    if (typeof component === 'function' && /^[A-Z]/.test(part)) {
      Object.assign(component, { displayName: `${namespace}.${part}` });
    }
  }
}

// Boundaries of the library's `sm:` breakpoint (40rem / 640px), so the
// responsive type scale and the Tabs stacked layout can be checked either side.
const govukViewports = {
  govukMobileSmall: {
    name: 'GOV.UK mobile (320px)',
    styles: { width: '320px', height: '640px' },
    type: 'mobile' as const,
  },
  govukBelowTablet: {
    name: 'GOV.UK just below tablet (639px)',
    styles: { width: '639px', height: '900px' },
    type: 'mobile' as const,
  },
  govukTablet: {
    name: 'GOV.UK tablet (640px)',
    styles: { width: '640px', height: '900px' },
    type: 'tablet' as const,
  },
};

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Introduction', 'Examples', 'Whitehall-UI'],
      },
    },

    viewport: {
      options: { ...govukViewports, ...INITIAL_VIEWPORTS },
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'error',
    },
  },
};

export default preview;
