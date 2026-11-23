import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = process.env.VITE_BASE || '/';

// Allows root index.html to stay production-ready for Hostinger Git,
// while dynamically loading from /src/main.jsx during dev and build.
const devEntryPlugin = {
  name: 'dev-entry-plugin',
  transformIndexHtml: {
    order: 'pre',
    handler(html, ctx) {
      if (ctx?.server || !html.includes('/src/main.jsx')) {
        let transformed = html
          .replace(/<script type="module" crossorigin src="\/assets\/[^"]+\.js"><\/script>/g, '')
          .replace(/<link rel="modulepreload"[^>]+>/g, '')
          .replace(/<link rel="stylesheet" crossorigin href="\/assets\/[^"]+\.css">/g, '');

        if (!transformed.includes('/src/main.jsx')) {
          transformed = transformed.replace('</head>', '  <script type="module" src="/src/main.jsx"></script>\n</head>');
        }
        return transformed;
      }
      return html;
    }
  }
};

export default defineConfig({
  base,
  plugins: [devEntryPlugin, react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['react-icons'],
        },
      },
    },
  },
})
