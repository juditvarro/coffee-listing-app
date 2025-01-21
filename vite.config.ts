import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  return {
    define: {
      'process.env.VITE_SOURCE_URL': JSON.stringify(env.VITE_SOURCE_URL),
    },
  plugins: [react()],
  };
});
