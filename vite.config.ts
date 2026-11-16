import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./registry/default', import.meta.url)),
    },
  },
  optimizeDeps: {
    include: [
      '@base-ui/react/accordion',
      '@base-ui/react/button',
      '@base-ui/react/checkbox',
      '@base-ui/react/checkbox-group',
      '@base-ui/react/radio',
      '@base-ui/react/radio-group',
      '@base-ui/react/tabs',
    ],
  },
});
