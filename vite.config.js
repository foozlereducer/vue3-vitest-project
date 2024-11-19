import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  server: {
    watch: {
      usePolling: true,
    },
    port: 3232, // Alternate port to avoid conflict with other Vue apps
  },
});