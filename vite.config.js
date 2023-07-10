import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { copy } from 'vite-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), svgr()],
});
