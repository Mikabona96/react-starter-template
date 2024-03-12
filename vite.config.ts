import { defineConfig, loadEnv } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const addEnv = (env: Record<string, string>) => {
    return Object.entries(env).reduce((prev, [key, val]) => {
      return {
        ...prev,
        [key]: val,
      };
    }, {});
  };

  const env = loadEnv(mode, process.cwd(), '');

  const babelConfig = {
    include: /\.(jsx|tsx)$/,
    babel: {
      plugins: ['babel-plugin-styled-components'],
      babelrc: false,
      configFile: false,
    },
  };

  return {
    plugins: [react(babelConfig), TanStackRouterVite()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      // Make environment variables accessible to your application code
      'process.env': addEnv(env),
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
