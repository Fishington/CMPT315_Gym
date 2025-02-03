import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css    : {
    preprocessorOptions: {
      scss: {
        api           : "modern-compiler",
        additionalData: `@use "/src/assets/styles/abstract/_index.scss" as *;`
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
