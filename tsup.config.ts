import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'registry/default/index.ts',
    'lib/utils': 'registry/default/lib/utils.ts',
    'ui/button': 'registry/default/ui/button.tsx',
    'ui/checkboxes': 'registry/default/ui/checkboxes.tsx',
    'ui/error-message': 'registry/default/ui/error-message.tsx',
    'ui/error-summary': 'registry/default/ui/error-summary.tsx',
    'ui/fieldset': 'registry/default/ui/fieldset.tsx',
    'ui/footer': 'registry/default/ui/footer.tsx',
    'ui/header': 'registry/default/ui/header.tsx',
    'ui/hint': 'registry/default/ui/hint.tsx',
    'ui/inset-text': 'registry/default/ui/inset-text.tsx',
    'ui/label': 'registry/default/ui/label.tsx',
    'ui/link': 'registry/default/ui/link.tsx',
    'ui/radios': 'registry/default/ui/radios.tsx',
    'ui/select': 'registry/default/ui/select.tsx',
    'ui/tag': 'registry/default/ui/tag.tsx',
    'ui/text-input': 'registry/default/ui/text-input.tsx',
    'ui/textarea': 'registry/default/ui/textarea.tsx',
  },
  format: ['esm'],
  tsconfig: 'tsconfig.lib.json',
  dts: true,
  splitting: true,
  treeshake: true,
  clean: true,
  outDir: 'dist',
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    '@base-ui/react',
    '@base-ui/react/*',
  ],
  esbuildOptions(options) {
    options.alias = {
      '@': './registry/default',
    };
  },
});
