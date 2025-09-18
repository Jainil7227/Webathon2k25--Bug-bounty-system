import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Webathon2k25--Bug-bounty-system/', // <-- important for GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
