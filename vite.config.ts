import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react';
import { babelConfig } from './config/babel.config';
import { addEnv } from './config/addEnv';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react(babelConfig), TanStackRouterVite()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      // Make environment variables accessible to your application code
      'process.env': addEnv(mode),
    },
    server: {
      open: true,
      port: 3000,
    },
    preview: {
      open: true,
      port: 3000,
    },
  };
});
