import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const path = require('path');

// Base path configuration:
// - VITE_BASE_PATH env var controls the deployment base path
// - Set to '/' for custom domain deployment (e.g. graphicdesignassociates.com)
// - Set to '/GraphicDesignAssociates/' for GitHub Pages subdirectory deployment
// - Defaults to '/' (custom domain / local dev)
const basePath = process.env.VITE_BASE_PATH || '/';

export default defineConfig({
  plugins: [react(),],
  base: basePath,
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
