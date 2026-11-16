import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'registry/default/index.ts',
    'registry/default/lib/utils.ts',
    'registry/default/ui/*.tsx',
  ],
  format: ['esm'],
  tsconfig: 'tsconfig.lib.json',
  dts: true,
  splitting: true,
  treeshake: true,
  clean: true,
  outDir: 'dist',
});
