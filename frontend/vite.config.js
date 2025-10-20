// Inside: vite.config.js

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'node:process'; // <--- ADD THIS LINE

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // This line will now work
  const env = loadEnv(mode, process.cwd(), ''); 

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/graphql': {
          target: env.VITE_WP_URL, 
          changeOrigin: true,
          secure: false,
        },
        '/wp-json': {
          target: env.VITE_WP_URL, 
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});