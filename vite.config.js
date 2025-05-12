// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ISUCKAZZ/WEED-nug', // 👈 must match the repo name
});
