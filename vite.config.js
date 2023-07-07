import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { copy } from 'vite-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-libraries',
  plugins: [
    react(),
    svgr(),
    copy({
      targets: [{ src: 'src/assets', dest: 'dist/assets' }],
    }),
  ],
});
