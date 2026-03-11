import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname =
  typeof __dirname === 'undefined'
    ? path.dirname(fileURLToPath(import.meta.url))
    : __dirname;

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(dirname, 'registry/default'),
    },
  },
  optimizeDeps: {
    include: [
      '@base-ui/react/checkbox',
      '@base-ui/react/checkbox-group',
      '@base-ui/react/select',
    ],
  },
});
