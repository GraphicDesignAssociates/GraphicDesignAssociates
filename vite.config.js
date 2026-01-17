import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const path = require('path');

// Use different base paths for local dev vs production (GitHub Pages)
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react(),],
  base: isProduction ? '/GraphicDesignAssociates/' : '/',  // Root for local dev, subdirectory for production
  server: {
    port: 3000, // Use the same port as CRA (optional)
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      blocks: path.resolve(__dirname, 'src/blocks'),
      components: path.resolve(__dirname, 'src/components'),
      demos: path.resolve(__dirname, 'src/demos'),
      docs: path.resolve(__dirname, 'src/docs'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      svg: path.resolve(__dirname, 'src/svg'),
      theme: path.resolve(__dirname, 'src/theme'),
      views: path.resolve(__dirname, 'src/views'),
    },
  }
});
