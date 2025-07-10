// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/LIFE-CARE-/', // 👈 Your GitHub repo name
  plugins: [react()],
});
