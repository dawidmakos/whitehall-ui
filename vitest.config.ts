import { defineConfig, mergeConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import viteConfig from './vite.config';

const dirname =
  typeof __dirname === 'undefined'
    ? path.dirname(fileURLToPath(import.meta.url))
    : __dirname;

const storybookProject = (
  name: string,
  viewport?: { width: number; height: number },
) => ({
  extends: true as const,
  plugins: [
    storybookTest({
      configDir: path.join(dirname, '.storybook'),
    }),
  ],
  test: {
    name,
    browser: {
      enabled: true,
      headless: true,
      provider: playwright({}),
      instances: [{ browser: 'chromium', ...(viewport && { viewport }) }],
    },
    setupFiles: ['.storybook/vitest.setup.ts'],
  },
});

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      projects: [
        storybookProject('storybook'),
        storybookProject('storybook-mobile', { width: 390, height: 844 }),
      ],
    },
  }),
);
