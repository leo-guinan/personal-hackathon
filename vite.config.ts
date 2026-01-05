import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // GitHub Pages configuration
  // For project pages (not user/organization pages), set base to repo name
  // The workflow will set VITE_BASE_PATH automatically
  base: process.env.VITE_BASE_PATH || '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
