import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // GitHub Pages configuration
  // For custom domains serving from root, use base path "/"
  // For GitHub Pages project pages, use "/repo-name/"
  // The workflow will set VITE_BASE_PATH automatically
  // Default to "/" for custom domains (most common setup)
  const basePath = process.env.VITE_BASE_PATH || '/';
  
  console.log('Building with base path:', basePath);
  
  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    base: basePath,
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    },
  };
});
