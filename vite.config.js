import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/GI-TECH/',  // 👈 Update this to match your repository name
});
