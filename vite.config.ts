import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // GitHub Pages configuration
  // For project pages (not user/organization pages), set base to repo name
  // The workflow will set VITE_BASE_PATH automatically
  // Default to '/personal-hackathon/' for this project if not set
  const basePath = process.env.VITE_BASE_PATH || (process.env.GITHUB_PAGES === 'true' ? '/personal-hackathon/' : '/');
  
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
