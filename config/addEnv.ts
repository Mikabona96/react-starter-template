import { loadEnv } from 'vite';

export const addEnv = (mode: string) => {
  const env = loadEnv(mode, process.cwd(), '');

  return Object.entries(env).reduce((prev, [key, val]) => {
    return {
      ...prev,
      [key]: val,
    };
  }, {});
};
