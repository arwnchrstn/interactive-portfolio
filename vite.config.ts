/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setupTests.ts',
    include: ['./tests/**/*.test.{tsx,ts,js,jsx}'],
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
      '@store': path.resolve(__dirname, './src/store/'),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
})
