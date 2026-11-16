import {
  defineConfig,
  mergeConfig,
  type TestProjectInlineConfiguration,
} from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import viteConfig from './vite.config';

const storybookProject = (
  name: string,
  viewport?: { width: number; height: number },
) =>
  ({
    extends: true,
    plugins: [storybookTest()],
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
  }) satisfies TestProjectInlineConfiguration;

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      projects: [
        {
          extends: true,
          test: { name: 'unit', include: ['src/**/*.test.ts'] },
        },
        storybookProject('storybook'),
        // Storybook's test runner renames every storybookTest() project to
        // `storybook:<configDir>`, so a second one clashes (storybookjs/storybook#37109).
        ...(process.env.VITEST_STORYBOOK === 'true'
          ? []
          : [storybookProject('storybook-mobile', { width: 390, height: 844 })]),
      ],
    },
  }),
);
