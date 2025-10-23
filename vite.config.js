import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/GI-TECH/', // important for GitHub Pages
  plugins: [react()],
})
